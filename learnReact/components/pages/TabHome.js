import React, {useState} from 'react';
import {connect} from 'react-redux';
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
const TabHome = (props) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  return (
    <Page>
      <Text>Home page {props.name}</Text>

      <Input
        value={props.name}
        onChangeText={(text) => props.setName(text)}
        placeholder="Digite seu nome"
      />

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
export default connect(mapStateToProps, mapDispachToProps)(TabHome);
