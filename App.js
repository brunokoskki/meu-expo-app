import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = () => {

    if (login == "Bruno" && senha == "123") {
      alert("Você receberá sua conta por E-Mail em até 30 anos.");
    }
    else {
      alert("Tá errado, coloca os dados certos.");
    }

  }

  useEffect(() => {
    console.log(login);
    console.log(senha);
  });

  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.scroll} 
      >

        <Text style={styles.title}>
            IA Gratis
        </Text>

        <Image
          style={styles.logo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5efDWyK3Z2p_8aYGSyDHrAKVG3QtK080a5fvqoBjYBLFrJcrgkmGtMeq2&s=10"
          }}
        />

        <Text style={styles.text}>
          Faça seu login para ter IA grátis
        </Text>

        <TextInput
          placeholder="Digite seu login"
          placeholderTextColor="#bbbbbb"
          style={styles.input}
          onChangeText={(textologin) => setLogin(textologin)}
        />

        <StatusBar style="auto" />

        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#bbbbbb"
          style={styles.input}
          onChangeText={(textosenha) => setSenha(textosenha)}
        />

        <Button
          color="gray"
          onPress={fazerLogin}
          title="Avançar"
        />

        <StatusBar style="auto" />

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: 'black'
  },

  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },

  logo: {
    width: 250,
    height: 140,
    borderRadius: 20,
    marginTop: -15
  },

  title: {
  color: 'white',
  fontSize: 32,
  fontWeight: 'bold',
  marginBottom: 20
  },

  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 5,
    marginTop: 30
  },

  input: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
    margin: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: 'white',
    textAlign: 'center',
    fontSize: 16,

    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 5
  }

});