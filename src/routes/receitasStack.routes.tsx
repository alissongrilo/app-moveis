import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Receitas, Iscadefrango } from "../pages";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Receitas" component={Receitas} />
      <Stack.Screen name="Iscadefrango" component={Iscadefrango} />
    </Stack.Navigator>
  );
}
