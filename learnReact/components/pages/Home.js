import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
`;
export default ({navigation}) => {
  const [name, setName] = useState('');
  const handleSendButton = () => {
    navigation.navigate('Sobre', {
      name,
    });
  };
  return (
    <Page>
      <Text>Home page</Text>
      <Input
        placeholder="Qual o seu nome?"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button onPress={handleSendButton} title="Enviar" />
    </Page>
  );
};
