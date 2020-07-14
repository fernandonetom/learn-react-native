import React, {useState} from 'react';
import {Image, Text} from 'react-native';
import styled from 'styled-components/native';
import lista from './data/data.json';
import ListaItem from './ListaItem';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Listagem = styled.FlatList`
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
      <Listagem
        data={lista}
        renderItem={(item) => {
          return <ListaItem data={item.item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </Page>
  );
};
