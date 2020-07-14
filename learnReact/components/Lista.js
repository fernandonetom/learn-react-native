import React, {useState} from 'react';
import {Image, Text} from 'react-native';
import styled from 'styled-components/native';
import lista from './data/data.json';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Scroll = styled.ScrollView`
  background-color: red;
  width: 100%;
`;
const Item = styled.View`
  padding: 10px;
  background-color: #ccc;
  margin: 10px;
  width: 80%;
  align-self: center;
`;
const ItemText = styled.Text`
  font-size: 20px;
`;
export default () => {
  return (
    <Page>
      <Scroll>
        {lista.map((item, index) => {
          return (
            <Item key={index}>
              <ItemText>{item.task}</ItemText>
            </Item>
          );
        })}
      </Scroll>
    </Page>
  );
};
