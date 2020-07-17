import React, {useState, useLayoutEffect} from 'react';
import {Text, Button} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

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
export default () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const handleSendButton = () => {
    navigation.setOptions({
      title: name,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: count,
    });
  }, [count]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="+1" onPress={handleHeaderPlus} />,
    });
  }, []);

  handleHeaderPlus = () => {
    setCount((c) => c + 1);
  };
  return (
    <Page>
      <Text>Mudar opções pelo componente</Text>
      <Input
        placeholder="Qual o seu nome?"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button onPress={handleSendButton} title="Mudar título" />
      <Button
        onPress={() =>
          navigation.setOptions({
            headerStyle: {
              backgroundColor: '#0000ff',
            },
          })
        }
        title="BG Azul"
      />
      <Button
        onPress={() =>
          navigation.setOptions({
            headerStyle: {
              backgroundColor: '#ff0000',
            },
          })
        }
        title="BG Vermelho"
      />
      <Button onPress={() => setCount(count + 1)} title="+1" />
    </Page>
  );
};
