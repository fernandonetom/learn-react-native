import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.View`
  width: 100px;
  height: 100px;
  background-color: green;
  margin-bottom: 50px;
`;
const Input = styled.TextInput`
  height: 40px;
  width: 90%;
  font-size: 18px;
  background-color: #ccc;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  color: #000;
`;
const KeyboardArea = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export default () => {
  useEffect(() => {
    alert('SO ' + Platform.OS);
  }, []);
  return (
    <Page>
      <KeyboardArea behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Logo />
        <Input placeholder="Quanto deu a conta?" placeholderTextColor="#000" />
      </KeyboardArea>
    </Page>
  );
};
