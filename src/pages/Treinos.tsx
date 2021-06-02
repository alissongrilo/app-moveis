import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Container, Text } from "../styles/Container";

export default function Treinos() { 
  const navigation = useNavigation();
  function handleResistencia() {  
    navigation.navigate("Resistencia");
  }
  return (
    <Container>
      <Text>Treinos / Todos</Text>
      <Button onPress={handleResistencia}>
        <Text>Treino de Resistencia</Text>
      </Button>
    </Container>
  );
}
