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
const Item = styled.TouchableHighlight`
  padding: 10px;
  background-color: #ccc;
  margin: 10px;
  width: 80%;
  align-self: center;
  flex-direction: row;
`;
const ItemText = styled.Text`
  font-size: 20px;
  flex: 1;
`;
const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 3px solid #0000ff;
`;
export default () => {
  return (
    <Page>
      <Scroll>
        {lista.map((item, index) => {
          return (
            <Item onPress={() => {}} underlayColor="#0000FF" key={index}>
              <>
                <ItemText>{item.task}</ItemText>
                <ItemCheck></ItemCheck>
              </>
            </Item>
          );
        })}
      </Scroll>
    </Page>
  );
};
