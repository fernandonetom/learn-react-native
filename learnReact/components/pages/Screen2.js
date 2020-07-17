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
      <Text>TELA 2 ACESSADA PELA HOME</Text>
      <Text></Text>

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
