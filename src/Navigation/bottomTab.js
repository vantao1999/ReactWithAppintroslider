/* eslint-disable prettier/prettier */
import Icons from 'react-native-vector-icons/EvilIcons';
import { Navigation } from 'react-native-navigation';
const bottomTab = () => {
    (
        Promise.all([
            Icons.getImageSource('chart', 30),
            Icons.getImageSource('user', 60),
            Icons.getImageSource('navicon', 30),
        ]).then(
            ([chart, home, nave]) => {
                Navigation.setRoot({
                    root: {
                        bottomTabs: {
                            children: [
                                {
                                    stack: {
                                        children: [
                                            {
                                                component: {
                                                    name: 'Main',
                                                    passProps: {
                                                        text: 'This is tab 1',
                                                    },
                                                },
                                            },
                                        ],
                                        options: {
                                            bottomTab: {
                                                icon: home,
                                                text: 'Home',
                                            },
                                            topBar: {
                                                visible: false,
                                            },
                                        },
                                    },
                                },
                                {
                                    component: {
                                        name: 'Main',
                                        passProps: {
                                            text: 'This is tab 2',
                                        },
                                        options: {
                                            bottomTab: {
                                                icon: chart,
                                                text: 'News',
                                            },
                                        },
                                    },

                                },

                                {
                                    component: {
                                        name: 'Main',
                                        passProps: {
                                            text: 'This is tab 3',
                                        },
                                        options: {
                                            bottomTab: {
                                                icon: nave,
                                                text: 'Options',
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                });
            })
    );
};
export default bottomTab;
