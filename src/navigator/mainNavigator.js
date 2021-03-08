import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Tutorial212861Navigator from '../features/Tutorial212861/navigator';
import NotificationList212833Navigator from '../features/NotificationList212833/navigator';
import Settings212832Navigator from '../features/Settings212832/navigator';
import Settings212824Navigator from '../features/Settings212824/navigator';
import UserProfile212822Navigator from '../features/UserProfile212822/navigator';
import BlankScreen0212800Navigator from '../features/BlankScreen0212800/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Tutorial212861: { screen: Tutorial212861Navigator },
NotificationList212833: { screen: NotificationList212833Navigator },
Settings212832: { screen: Settings212832Navigator },
Settings212824: { screen: Settings212824Navigator },
UserProfile212822: { screen: UserProfile212822Navigator },
BlankScreen0212800: { screen: BlankScreen0212800Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
