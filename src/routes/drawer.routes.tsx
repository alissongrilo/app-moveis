import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Usuario, Agenda } from "../pages";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Usuario" component={Usuario} />
      <Drawer.Screen name="Agenda" component={Agenda} />
    </Drawer.Navigator>
  );
}
