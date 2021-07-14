import React from "react";
import { Message } from "../Home/styles";
import { Header } from "../../components";
import { Container, Text } from "../../styles/Container";

export default function Iscadefrango() {
  return (
    <Container>
      <Message>Iscas de Frango com refogado de vegetais</Message>
      
      <Header
        image={require("../../../assets/img/receita-1.png")}
      />
      <Text></Text>

      <Text>Para temperar o frango:</Text>
      <Text></Text>
      <Text>* 500g de peito de frango sem pele e sem osso</Text>
      <Text>* 1 limão tahiti espremido</Text>
      <Text>* Sal e pimenta do reino a gosto</Text>
      <Text>* 2 colheres de óleo de gergelim</Text>
      <Text></Text>
      <Text>Para empanar:</Text>
      <Text></Text>
      <Text>* 1 e ½  xícara de chá de fubá</Text>
    </Container>
  );
}
