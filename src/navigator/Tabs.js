import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { Tab4Screen } from '../screens/Tab4Screen';


export const Tabs = () => {
    return <TabsAndroid />
}
const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
    return (

        <BottomTabAndroid.Navigator
         barStyle={{ backgroundColor: '#Ffffff' }}
            sceneAnimationEnabled={true}
            
            screenOptions={({ route }) => ({

                tabBarIcon: () => {

                    let iconName = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'today-outline';
                            break;

                        case 'Tab2Screen':
                            iconName = 'calendar-outline';
                            break;

                        case 'Tab3Screen':
                            iconName = 'person-outline';
                            break;

                        case 'Tab4Screen':
                            iconName = 'settings-outline';
                            break;
                    }
                    return <Icon name={iconName} size={25} color={"#000"} />;
                }
            })
            }
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: "Home" }} component={Tab2Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: "Reportes" }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab3Screen" options={{ title: "Profile" }} component={Tab3Screen} />
            <BottomTabAndroid.Screen name="Tab4Screen" options={{ title: "Settings" }} component={Tab4Screen} />
        </BottomTabAndroid.Navigator>
    );
}

