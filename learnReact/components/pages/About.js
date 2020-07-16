import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const name = route.params.name || 'visitante';

  //   const name = props.route.params.name;
  return (
    <Page>
      <Text>Tela de sobre</Text>
      <Text>Seu nome é {name}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </Page>
  );
};
