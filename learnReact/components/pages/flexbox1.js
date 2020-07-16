import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: #333;
  height: 200px;
  flex-wrap: wrap;
`;
const Quadrado = styled.Text`
  background-color: ${(props) => props.cor || '#FFFFFF'};
  width: 50px;
  height: 50px;
`;

export default () => {
  return (
    <Page>
      <Header>
        <Quadrado cor="red" />
        <Quadrado cor="green" />
        <Quadrado cor="blue" />
        <Quadrado cor="pink" />
        <Quadrado cor="red" />
        <Quadrado cor="green" />
        <Quadrado cor="blue" />
        <Quadrado cor="pink" />
        <Quadrado cor="red" />
        <Quadrado cor="green" />
        <Quadrado cor="blue" />
        <Quadrado cor="pink" />
      </Header>
    </Page>
  );
};
