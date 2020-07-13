import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
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

const MyComponent = (props) => {
  const [name, setName] = useState('Valor inicial');
  const [backupName, setBackupName] = useState('Valor inicial');
  const handleClick = () => {
    setBackupName(name);
  };
  return (
    <View>
      <Input value={name} onChangeText={(e) => setName(e)} />
      <Text>Valor atual: {backupName}</Text>
      <Button title="Salvar no state" onPress={handleClick} />
    </View>
  );
};

export default () => {
  return (
    <Page>
      <MyComponent />
    </Page>
  );
};
