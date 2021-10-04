import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import login from '../screens/login';
import signup from '../screens/signup';
import home from '../screens/home';

const screens = {
    login: {
        screen: login
    },
    signup: {
        screen: signup
    },
    home: {
        screen: home
    }
     
}

const loginStack = createStackNavigator(screens);

export default createAppContainer(loginStack);