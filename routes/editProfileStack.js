import {createStackNavigator} from 'react-navigation-stack';
import editProfile from '../screens/editProfile';


const screens = {
    editProfile: {
        screen: editProfile
    }
}

const editProfileStack = createStackNavigator(screens);

export default editProfileStack;