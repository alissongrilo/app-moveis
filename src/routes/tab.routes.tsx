import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReceitasStack from "./receitasStack.routes";
import InicioStack from "./inicioStack.routes";
import TreinosStack from "./treinosStack.routes";
import Drawer from "./drawer.routes";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={InicioStack} />
      <Tab.Screen name="Receitas" component={ReceitasStack} /> 
      <Tab.Screen name="Treinos" component={TreinosStack} /> 
      <Tab.Screen name="Usuario" component={Drawer} />
    </Tab.Navigator>
  );
}
