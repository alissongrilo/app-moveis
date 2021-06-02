import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Container, Text } from "../styles/Container";

export default function Receitas() { 
  const navigation = useNavigation();
  function handleIscadefrango() {  
    navigation.navigate("Iscadefrango");
  }
  return (
    <Container>
      <Text>Receitas/Todas!</Text>
      <Button onPress={handleIscadefrango}>
        <Text>Isca de frango</Text>
      </Button>
    </Container>
  );
}
