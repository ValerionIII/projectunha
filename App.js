import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//agendar horario
const Formulario = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [Procedimentos, setProcedimentos] = useState();
  const [datas, setdatas] = useState([
  { key: '1', date: '08/04' },
  { key: '2', date: '15/04' },
  { key: '3', date: '25/04' },
  { key: '4', date: '02/05' },
]);
  const [pagamento, setpagamento] = useState();
  const [horario, sethorario] = useState('');

  const handleConfirmar = () => {
    // Lógica para confirmar as informações do formulário
    
    console.log('Nome:', nome);
    console.log('CPF:', cpf);
    console.log('Telefone:', telefone);
    console.log('E-mail:', email);
    console.log('procedimentos:', Procedimentos);
    console.log('datas disponieis:', datas);
    console.log('forma de pagamento:', pagamento)
    console.log('horario disponivel', horario)

   alert( 'seu cadastro foi concluido entraremos em contato quando estiver proximo do dia agendado! OBRIGADO PELA PREFERENCIA')
  

  };


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.view0}>
        
        <Text style={styles.teste0}>Nail Designer</Text>
        <Text style={styles.view6}>
        <MaterialCommunityIcons name="hand-heart" size={30} color="#CD1076" />
        </Text>
        
        </View> 
    <View style={styles.view1}>
      <Text style={styles.teste}>dados de agendamento</Text>
      <MaterialIcons name="format-list-numbered" size={24} color="black" />
      </View>
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
      <View style={styles.view2}>
      <Text style={styles.teste}>Procedimentos da unha</Text>
      <FontAwesome5 name="hand-sparkles" size={24} color="pink" />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setProcedimentos('fibra de vidro')}
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
      <View style={styles.view3}>
      <Text style={styles.teste}>Datas disponíveis</Text>
      <Fontisto name="date" size={24} color="red" />
      </View>

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

<View style={styles.view4}>
      <Text style={styles.teste}>Formas de pagamento</Text>
      <FontAwesome5 name="money-check-alt" size={24} color="green" />
      </View>
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
      
      <View style={styles.view5}>
      <Text style={styles.teste}>horario disponieis</Text>
      <Feather name="clock" size={30} color="yellow" />
     
      </View>
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
      


        
      
      <Button title="Confirmar" onPress={handleConfirmar} />

      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0E6EF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    
  },
  input: {
    height: 50,
width: '100%',
backgroundColor: '#fff',
borderRadius: 10,
paddingHorizontal: 20,
marginTop: 10,
fontSize: 16,
  },
  button: {
    height: 50,
width: '100%',
backgroundColor: '#fff',
borderRadius: 10,
paddingHorizontal: 20,
marginTop: 10,
justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },

  confirmButton: {
    height: 50,
    width: '100%',
    backgroundColor: '#red',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'green',
    },

    confirmButtonText: {
      fontSize: 16,
      color: '#red',
      fontWeight: 'bold',
      },

  teste:{
fontSize: 20,
fontWeight: 'bold',
  },
  view1: {
  flexDirection:'row',
  marginTop: 55,
  },
  view2:{
    flexDirection:'row',
marginTop: 25,

  },
  view3:{
    flexDirection:'row',
    marginTop: 30,
  },
  view4:{
    flexDirection:'row',
    marginTop:30,
  },
view5:{
  flexDirection:'row',
  marginTop: 30,
},
teste0:{
  fontSize: 40,
  fontWeight: 'bold',
  color: "#FF69B4",
},

view0:{
  flexDirection:'row',
  marginTop:30,
},
view6:{
flexDirection: 'row',
marginTop: 20,

},

setProcedimentos:{
  borderWidth:5,
  borderColor:'green',
}
});

export default Formulario;