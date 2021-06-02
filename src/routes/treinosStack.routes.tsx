import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Treinos, Resistencia } from "../pages";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Treinos" component={Treinos} />
      <Stack.Screen name="Resistencia" component={Resistencia} />
    </Stack.Navigator>
  );
}
