import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./homeStack.routes";
import WelcomeStack from "./welcomeStack.routes";
import Drawer from "./drawer.routes";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="WelcomeStack" component={WelcomeStack} />
      <Tab.Screen name="Drawer" component={Drawer} />
    </Tab.Navigator>
  );
}
