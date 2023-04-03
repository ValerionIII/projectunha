import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ServiceList = () => {
  const [progress, setProgress] = useState(0);

  const services = [
    { name: 'Fibra de vidro', price: 120 },
    { name: 'Banho de gel', price: 50 },
    { name: 'Gel na tips', price: 80 },
    { name: 'Remoção', price: 30 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços</Text>
      {services.map((service) => (
        <View style={styles.service} key={service.name}>
          <Text>{service.name}:</Text>
          <Text>R${service.price.toFixed(2)}</Text>
        </View>
      ))}
      <View style={styles.progress}>
        <Text>Progresso:</Text>
        <TextInput
          style={styles.progressBar}
          value={progress.toString()}
          keyboardType="numeric"
          onChangeText={(text) => setProgress(parseInt(text))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  progressBar: {
    marginLeft: 8,
    width: 100,
    height: 16,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 2,
    textAlign: 'center',
  },
});

export default ServiceList;