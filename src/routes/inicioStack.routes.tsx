import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Inicio, Suporte } from "../pages";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />  
      <Stack.Screen name="Suporte" component={Suporte} />
    </Stack.Navigator>
  );
}
