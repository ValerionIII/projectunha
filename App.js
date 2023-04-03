import React, { useState } from 'react';
import { View, TextInput, Button, Picker } from 'react-native';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [escolha, setEscolha] = useState('');

  const handleConfirmar = () => {
    // envia os dados para um servidor ou armazena localmente
    console.log({ nome, cpf, telefone, email, escolha });
  };

  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <Picker
        selectedValue={escolha}
        onValueChange={(itemValue) => setEscolha(itemValue)}
      >
        <Picker.Item label="Selecione uma opção" value="" />
        <Picker.Item label="Fibra de vidro" value="120,0" />
        <Picker.Item label="Banho de gel" value="50,0" />
        <Picker.Item label="Gel na tips" value="80,0" />
        <Picker.Item label="Remoção" value="30,0" />
      </Picker>
      <Button title="Confirmar" onPress={handleConfirmar} />
    </View>
  );
}