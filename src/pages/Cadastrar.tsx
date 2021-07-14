import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container,
  FormRow,
  Label,
  TextInput,
  Title,
  Form,
} from "../styles/Login";
import { Button, ButtonText } from "../components";

export default function Cadastrar() {
  const navigation = useNavigation();
  function handleUsuario() {
    navigation.navigate("Usuario");
  }
  return (
    <Container>
      <Form>
        <Title>1BETTER</Title>
        <FormRow>
          <Label>Nome</Label>
          <TextInput placeholder="nome"></TextInput>
        </FormRow>
        <FormRow>
          <Label>E-mail</Label>
          <TextInput placeholder="email"></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha</Label>
          <TextInput placeholder="senha"></TextInput>
        </FormRow>
        <Button title="Salvar" onPress={handleUsuario} />
        <ButtonText title="Voltar" onPress={handleUsuario} />
      </Form>
    </Container>
  );
}