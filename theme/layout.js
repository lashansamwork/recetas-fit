
import { Dimensions } from 'react-native';

const deviceHeight = Platform.OS === "ios"
? Dimensions.get("window").height
: 500;

const layout = {
    padding:{
        small: 4,
        medium: 8,
        large: 12,
        xxxLarge: 20
    },
    radius: {
      image: 10
    },
    autoHeight: {
      small: deviceHeight*0.2,
      medium: deviceHeight*0.4,
      large: deviceHeight*0.6,
      xxxLarge: deviceHeight*0.8,
    },
  };
  
  export default layout;
  