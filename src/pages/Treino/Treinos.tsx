import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Container, Text } from "../../styles/Container";
import { Message } from "../Home/styles"

export default function Treinos() { 
  const navigation = useNavigation();
  function handleResistencia() {  
    navigation.navigate("Resistencia");
  }
  return (
    <Container>
      <Message>Treinos / Todos</Message>
      <Button onPress={handleResistencia}>
        <Text>Treino de Resistencia</Text>
      </Button>
    </Container>
  );
}
