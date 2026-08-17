import { Text, View, TextInput } from 'react-native';

export default function ComponenteLogin(props) {
  return (

    <View>

      {/*
      <Text style={props.textStyle}>
        {props.text}
      </Text>
      */}

      <TextInput
        placeholder="Digite sua data de nascimento"
        placeholderTextColor="#bbbbbb"
        style={props.inputStyle}
      />

    </View>

  );
}