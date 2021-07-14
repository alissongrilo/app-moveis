import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Entypo, FontAwesome5  } from '@expo/vector-icons'; 
import ReceitasStack from "./receitasStack.routes";
import InicioStack from "./inicioStack.routes";
import TreinosStack from "./treinosStack.routes";
import Drawer from "./drawer.routes";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={InicioStack} options={{
        tabBarLabel: "Inicio",
        tabBarIcon: () => (
          <FontAwesome5 name="home" size={24} color="black" />
        )
      }}/>
      
      <Tab.Screen name="Receitas" component={ReceitasStack} options={{
        tabBarLabel: "Receitas",
        tabBarIcon: () => (
          <MaterialCommunityIcons name="food-apple" size={24} color="black" />
        )
      }}/> 

      <Tab.Screen name="Treinos" component={TreinosStack} options={{
        tabBarLabel: "Treinos",
        tabBarIcon: () => (
          <MaterialCommunityIcons name="dumbbell" size={24} color="black" />
        )
      }} />

      <Tab.Screen name="Usuario" component={Drawer} options={{
        tabBarLabel: "Usuario",
        tabBarIcon: () => (
          <Entypo name="user" size={24} color="black" />
        )
      }} />

    </Tab.Navigator>
  );
}
