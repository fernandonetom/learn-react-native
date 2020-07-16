import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Input = styled.TextInput`
  font-size: 20px;
  border: 1px solid #333;
  height: 50px;
  width: 90%;
  padding: 10px;
`;
const Salvar = styled.TouchableOpacity`
  width: 90%;
  height: 40px;
  background-color: #4444ff;
  border-radius: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  color: #fff;
  font-size: 20px;
`;
const MostraNome = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #333;
  margin-top: 50px;
`;

export default () => {
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');

  const getName = async () => {
    const n = await AsyncStorage.getItem('@name');
    setName(n);
  };
  useEffect(() => {
    getName();
  }, []);
  return (
    <Page>
      <Input
        placeholder="Digite seu nome"
        value={newName}
        onChangeText={(value) => setNewName(value)}
      />
      <Salvar
        activeOpacity={0.8}
        onPress={async () => {
          if (newName !== '') {
            await AsyncStorage.setItem('@name', newName);
            setName(newName);
            setNewName('');
          }
        }}>
        <Text>Salvar</Text>
      </Salvar>
      <MostraNome>
        <Text>Seu nome é: {name}</Text>
      </MostraNome>
    </Page>
  );
};
