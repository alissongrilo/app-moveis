import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Container, Text } from "../../styles/Container";
import { Header } from "../../components";
import { Message } from "./styles";

export default function Inicio() {   
  const navigation = useNavigation();
  function handleSuporte() {           
    navigation.navigate("Suporte"); 
  }
  return (
    <Container>
      <Message>O seu guia de desenvolvimento pessoal!</Message>
      <Text></Text>
      
      <Button onPress={handleSuporte}>
        <Header
          image={require("../../../assets/img/kobe-bryant.png")}
        />
      </Button>

      <Text></Text>
    </Container>
  );
}
