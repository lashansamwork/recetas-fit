import 'react-native-gesture-handler';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext();


function AuthContextProvider({ children }) {


    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'SIGN_IN':
                    return {
                        isSignout: false,
                    };
                case 'SIGN_OUT':
                    return {
                        isSignout: true,
                    };
            }
        },
        {
            isSignout: true,
        }
    );

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            let signedResponse;
            try {
                signedResponse = await getSignInStatus();
            } catch (e) {
            }
            
            if(signedResponse?.signInStatus){
                console.log('tadaa...')
                dispatch({ type: 'SIGN_IN' });
            }
            
        };

        bootstrapAsync();
    }, []);

    const getSignInStatus = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@signedInStatus')
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            return null;
        }
      }

    const authContext = React.useMemo(
        () => ({
            signIn: async data => {
                const signInStatus = { signInStatus: true }
                const jsonValue = JSON.stringify(signInStatus)
                AsyncStorage.setItem('@signedInStatus', jsonValue)
                dispatch({ type: 'SIGN_IN' });
            },
            signOut: () => {
                const signInStatus = { signInStatus: false }
                const jsonValue = JSON.stringify(signInStatus)
                AsyncStorage.setItem('@signedInStatus', jsonValue)
                dispatch({ type: 'SIGN_OUT' })
            },
            isSignout: state.isSignout
        }),
        [state]
    );

    return (<AuthContext.Provider value={authContext}>
        {children}
    </AuthContext.Provider>);
}

export { AuthContext, AuthContextProvider};
