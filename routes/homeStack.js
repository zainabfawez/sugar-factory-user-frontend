import {createStackNavigator} from 'react-navigation-stack';
import home from '../screens/home';


const screens = {
    home: {
        screen: home
    }
}

const homeStack = createStackNavigator(screens);

export default homeStack;