import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Input = styled.TextInput`
  padding: 10px;
  height: 60px;
  width: 300px;
  border: 1px solid #ccc;
`;

const Hello = (props) => {
  const [name, setName] = useState('Teste');
  function mudarTexto(texto) {
    setName(texto);
  }
  return (
    <View>
      <Input value={name} onChangeText={mudarTexto} />
      <Text>Olá {name}</Text>
    </View>
  );
};

export default () => {
  return (
    <Page>
      <Hello />
    </Page>
  );
};
