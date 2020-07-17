import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Text, Button} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabAbout = (props) => {
  const navigation = useNavigation();

  return (
    <Page>
      <Text>Tela de Tabsobre</Text>
      <Text>Olá {props.name}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </Page>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
    email: state.userReducer.email,
  };
};
const mapDispachToProps = (dispach) => {
  return {
    setName: (name) => dispach({type: 'SET_NAME', payload: {name}}),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(TabAbout);
