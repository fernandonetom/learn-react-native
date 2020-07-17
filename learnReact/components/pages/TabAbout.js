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

  return (
    <Page>
      <Text>Tela de Tabsobre</Text>
      <Text></Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </Page>
  );
};
