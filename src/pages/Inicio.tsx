import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Container, Text } from "../styles/Container";

export default function Inicio() {   
  const navigation = useNavigation();
  function handleSuporte() {           
    navigation.navigate("Suporte"); 
  }
  return (
    <Container>
      <Text>Seja bem vindo a nossa plataforma 1BETTER!</Text>  
      <Button onPress={handleSuporte}>
        <Text>Suporte</Text>   
      </Button>
    </Container>
  );
}
