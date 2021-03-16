import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from '../features/Splash117937/';
import TermsAndConditions from '../features/TermsAndConditions217936/';
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen.navigator
  },
  TermsAndConditions: {
    screen: TermsAndConditions.navigator
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
