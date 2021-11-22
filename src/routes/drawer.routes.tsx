import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Usuario, Cadastrar, Camera, File, Sair } from "../pages";
import { AntDesign, FontAwesome5, FontAwesome, SimpleLineIcons  } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: true}}>

      <Drawer.Screen name="Usuario" component={Usuario} options={{
        drawerIcon: () => <AntDesign name="user" size={24} color="black" />}}/>

      <Drawer.Screen name="Cadastrar" component={Cadastrar} options={{
        drawerIcon: () => <FontAwesome5 name="cash-register" size={24} color="black" />}}/>

      <Drawer.Screen name="Camera" component={Camera} options={{
        drawerIcon: () => <AntDesign name="camera" size={24} color="black" />}}/>

      <Drawer.Screen name="File" component={File} options={{
        drawerIcon: () => <FontAwesome name="file" size={24} color="black" />}}/>

      <Drawer.Screen name="Sair" component={Sair} options={{
        drawerIcon: () => <SimpleLineIcons name="logout" size={24} color="black" />}}/>

    </Drawer.Navigator>
  );
}
