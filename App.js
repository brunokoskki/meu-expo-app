import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { TextInput } from 'react-native';

export default function App() {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = () => {

    if (login == "Gabriel" && senha == "123")
    {
      alert("Bem vindo Gabriel")
    }
    else {
        alert("Deu ruim")
    }

    
  }

  useEffect(()=>{
    console.log(login)
    console.log(senha)
  });

  return (
    <View style={styles.container}>

    <ScrollView
       contentContainerStyle={{
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  }}
    >  
      <Image 
        style={{
          width:150, 
          height:80
        }} 
        
        alignItems="center"
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFp8SrcHwyDiHtbxM1DshunmQ96WLrJGfqbfPR7VCrJZZXfqNNw7vZlgR&s=10"}}
        
      ></Image>

      <Text
      style={{
        alignSelf: 'center',
        color: 'white'
      
      }}
      >Login</Text>

      <TextInput
      placeholder="Typer your login"
      style={{
        width: 300,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 50,
        margin: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.26)',
        color: 'white',
        textAlign: 'center'
      }}

      onChangeText={(textologin) => setLogin(textologin)}

        /> 
      <StatusBar style="auto" />
    
    <TextInput
      placeholder="Typer your password"
      style={{
         width: 300,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 50,
        margin: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.26)',
        color: 'white',
        textAlign: 'center'
      }}
        onChangeText={(textosenha) => setSenha(textosenha)}
    /> 

    <Button
      color="black"
      onPress={fazerLogin}
      style={styles.button}
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
});
