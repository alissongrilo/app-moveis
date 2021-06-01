import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Container, Text } from "../styles/Container";

export default function Welcome() {
  const navigation = useNavigation();
  function handleGoodBye() {
    navigation.navigate("GoodBye");
  }
  return (
    <Container>
      <Text>Seja bem vindo!</Text>
      <Button onPress={handleGoodBye}>
        <Text>Tchau</Text>
      </Button>
    </Container>
  );
}
