import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Container, Text } from "../styles/Container";

export default function Screen() {
  const navigation = useNavigation();
  function handleNotification() {
    navigation.navigate("Agenda");
  }
  return (
    <Container>
      <Text>Usuario</Text>
      <Button onPress={handleNotification}>
        <Text>Entre na sua agenda</Text>
      </Button>
    </Container>
  );
}
