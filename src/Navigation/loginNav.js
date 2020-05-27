/* eslint-disable prettier/prettier */
import { Navigation } from 'react-native-navigation';
const loginNav = () => {
    (

        Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name: 'Login',
                            },
                        },
                    ],
                    options: {
                        topBar: {
                            visible: false,
                        },
                    },
                },
            },
        })
    );
};
export default loginNav;
