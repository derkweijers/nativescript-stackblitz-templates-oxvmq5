import { BaseNavigationContainer } from "@react-navigation/core";
import * as React from "react";
import {
  stackNavigatorFactory,
  tabViewNavigatorFactory,
} from "react-nativescript-navigation";

import { ScreenOne } from "./ScreenOne";
import { ScreenTwo } from "./ScreenTwo";

const StackNavigator = stackNavigatorFactory();
const TabViewNavigator = tabViewNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator initialRouteName="One">
      <StackNavigator.Screen name="One" component={ScreenOne} />
      <StackNavigator.Screen name="Two" component={ScreenTwo} />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);
