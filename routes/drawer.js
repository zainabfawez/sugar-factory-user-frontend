import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';
import homeStack from './homeStack';
import editProfileStack from './editProfileStack';

const RootDrawerNavigator = createDrawerNavigator({
    home: {
        homeStack,
    },
    editProfile: {
        editProfileStack,
    },
});

export default createAppContainer(RootDrawerNavigator);
