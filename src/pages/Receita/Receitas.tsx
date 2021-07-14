import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Container, Text } from "../../styles/Container";
import { Header } from "../../components";
import { Message } from "../Home/styles";

export default function Receitas() { 
  const navigation = useNavigation();
  function handleIscadefrango() {  
    navigation.navigate("Iscadefrango");
  }
  return (
    <Container>
      <Message>Receitas/Todas!</Message>
      
      <Button onPress={handleIscadefrango}>
        <Text>Iscas de frango</Text>
      </Button>
      
    </Container>
  );
}
