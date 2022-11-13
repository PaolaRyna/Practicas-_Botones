import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tabs } from './Tabs'
const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (

    <Drawer.Navigator
      screenOptions={{
        headerShown: true,  // Oculta la hamburguesa 

      }}
    >
      <Drawer.Screen name="Report on" component={Tabs} />
      <Drawer.Screen name="juan" component={Tab2Screen} />
    </Drawer.Navigator>
  );
}
