import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [Procedimentos, setProcedimentos] = useState(null);
  const [datas, setdatas] = useState(null);
  const [pagamento, setpagamento] = useState(null)
  const [ horario, sethorario] = useState("")
  const [selectedButton, setSelectedButton] = useState(null);

  const handleConfirmar = () => {
    // Lógica para confirmar as informações do formulário
    console.log('Nome:', nome);
    console.log('CPF:', cpf);
    console.log('Telefone:', telefone);
    console.log('E-mail:', email);
    console.log('procedimento selecionado:', Procedimentos);
    console.log('data selecionada:', datas);
    console.log('forma de pagamento:', pagamento)
    console.log('horarios disponiveis', horario)

    const handleButtonPress = (buttonIndex) => {
      setSelectedButton(buttonIndex);
  };

  const getButtonStyle = (buttonIndex) => {
    if (selectedButton === buttonIndex) {
      return { ...styles.button, backgroundColor: 'yellow' };
    } else {
      return styles.button;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity
      style={[styles.button, isButtonSelected('fibra de vidro') && styles.selectedButton]}
      onPress
       
      >
        <Text style={styles.buttonText}>Fibra de vidro - R$ 120,00</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setProcedimentos('banho de gel')}
      >
        <Text style={styles.buttonText}>Banho de gel - R$ 50,00</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setProcedimentos('gel na tips')}
      >
        <Text style={styles.buttonText}>Gel na tips - R$ 80,00</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setProcedimentos('remoção')}
      >
        <Text style={styles.buttonText}>Remoção - R$ 30,00</Text>
      </TouchableOpacity>
      <Button title="Confirmar" onPress={handleConfirmar} />

      <Text style={styles.teste}>Datas disponíveis</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setdatas('08/04')}
      >
        <Text style={styles.buttonText}>08/04</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setdatas('15/04')}
      >
        <Text style={styles.buttonText}>15/04</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setdatas('25/04')}
      >
        <Text style={styles.buttonText}>25/04</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setdatas('02/05')}
      >
        <Text style={styles.buttonText}>02/05</Text>
      </TouchableOpacity>

      <Text style={styles.teste}>Formas de pagamento</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setpagamento('Pix')}
      >
        <Text style={styles.buttonText}>Pix</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setpagamento('Débito')}
      >
        <Text style={styles.buttonText}>Débito</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setpagamento('Crédito')}
      >
        <Text style={styles.buttonText}>Crédito</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setpagamento('Expresso')}
      >
        <Text style={styles.buttonText}>Expresso</Text>
      </TouchableOpacity>

      <Text style={styles.teste}>horario disponieis</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => sethorario('8:20')}
      >
        <Text style={styles.buttonText}>8:20</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => sethorario('10:40')}
      >
        <Text style={styles.buttonText}>10:40</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => sethorario('13:00')}
      >
        <Text style={styles.buttonText}>13:00</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => sethorario('15:20')}
      >
        <Text style={styles.buttonText}>15:20</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    width: '80%',
  },
  button: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 4,
    marginVertical: 8,
    width: '80%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedButton: {
    backgroundColor: 'yellow',

});

export default Formulario;