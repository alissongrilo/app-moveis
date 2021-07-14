import React from "react";
import { Message } from "../Home/styles"
import { Header } from "../../components";
import { Container, Text } from "../../styles/Container";

export default function Resistencia() {
  return (
    <Container>
      <Message>Treino de resistência para você praticar em casa</Message>
      <Header
        image={require("../../../assets/img/treino-2.png")}
      />
      <Text></Text>
      <Text>* 150 wall-ball shots</Text>
      <Text>* Deadlift 5-3-3-1-1-1 reps</Text>
      <Text>* 24 air squats</Text>
      <Text>* 24 push ups</Text>
      <Text>* 24 lunges</Text>
      <Text>* 400 m running</Text>
      <Text>* 5 times a week</Text>
    </Container>
  );
}
