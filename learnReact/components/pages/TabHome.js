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

  return (
    <Page>
      <Text>Home page</Text>

      <Button
        onPress={() => navigation.navigate('Screen2')}
        title="Ir para tela 2"
      />
      <Button
        onPress={() => navigation.navigate('Screen3')}
        title="Ir para tela 3"
      />
      <Button
        onPress={() => navigation.navigate('TabAbout')}
        title="Ir para tab SOBRE"
      />
      <Button onPress={() => navigation.goBack()} title="Voltar" />
    </Page>
  );
};
