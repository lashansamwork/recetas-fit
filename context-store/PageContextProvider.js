import 'react-native-gesture-handler';
import React from 'react';
const PageContext = React.createContext();


function PageContextProvider({ children }) {

    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            return {
                pageNumber: action.pageNumber
            }
        },
        {
            pageNumber: 1,
        }
    );

    const pageContext = React.useMemo(
        () => ({
            changePage: (pageNumber) => {
                dispatch({ pageNumber: pageNumber });
            },
            pageNumber: state.pageNumber
        }),
        [state]
    );

    return (<PageContext.Provider value={pageContext}>
        {children}
    </PageContext.Provider>);
}

export { PageContext, PageContextProvider};
