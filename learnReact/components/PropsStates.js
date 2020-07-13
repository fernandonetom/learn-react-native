import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Hello = (props) => {
  const [name, setName] = useState('Teste');
  return <Text>Nome: {name}</Text>;
};

export default () => {
  return (
    <Page>
      <Hello>Meu teste</Hello>
    </Page>
  );
};
