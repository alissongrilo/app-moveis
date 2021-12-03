import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Usuario from "./drawer.routes";
import Inicio from "./tab.routes";
import { useAuth } from "../hook/auth";

export default function Routes() {
  const { access_token } = useAuth();
  return (
    <NavigationContainer>
      {access_token ? <Inicio /> : <Usuario />}
    </NavigationContainer>
  );
}