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

/*Na linha 37, estou voltando para o Início somente para testes,
o intuito do botão login será autenticar e depois levá-lo para
uma página específica do usuário*/

export default function Login() {
  const navigation = useNavigation();
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }
  function handleInicio() {
    navigation.navigate("Inicio");
  }
  return (
    <Container>
      <Form>
        <Title>1BETTER</Title>
        <FormRow>
          <Label>E-mail</Label>
          <TextInput placeholder="email"></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha</Label>
          <TextInput placeholder="senha"></TextInput>
        </FormRow>
        <Button title="Login" onPress={handleInicio} />
        <ButtonText title="Cadastre-se" onPress={handleCadastrar} />
      </Form>
    </Container>
  );
}
