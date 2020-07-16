import React, {useState} from 'react';
import {Text, View, Button, Keyboard} from 'react-native';
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

const Quadrado = styled.View`
  height: 150px;
  width: 150px;
  border: 3px dashed #ccc;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const MyComponent = (props) => {
  const [name, setName] = useState('Valor inicial');
  const [mostrar, setMostrar] = useState(false);

  const handleClick = () => {
    setMostrar(!mostrar);
    Keyboard.dismiss();
  };
  return (
    <>
      <Input value={name} onChangeText={(e) => setName(e)} />
      <Button
        title={mostrar ? 'Ocultar nome' : 'Mostrar nome'}
        onPress={handleClick}
      />
      {mostrar && (
        <Quadrado>
          <Text>Seu nome é: </Text>
          <Text>{name}</Text>
        </Quadrado>
      )}
    </>
  );
};

export default () => {
  return (
    <Page>
      <MyComponent />
    </Page>
  );
};
