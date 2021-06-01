import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Container, Text } from "../styles/Container";

export default function Screen() {
  const navigation = useNavigation();
  function handleNotification() {
    navigation.navigate("Notification");
  }
  return (
    <Container>
      <Text>Tela!</Text>
      <Button onPress={handleNotification}>
        <Text>Notificação</Text>
      </Button>
    </Container>
  );
}
