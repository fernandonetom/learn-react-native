import React, {useState} from 'react';
import {Image, Text} from 'react-native';
import styled from 'styled-components/native';
import lista from './data/data.json';
import ListaItem from './ListaItem';
import AddItemArea from './AddItemArea';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Listagem = styled.FlatList`
  background-color: #fff;
  width: 100%;
`;
const Item = styled.TouchableHighlight`
  padding: 10px;
  background-color: #eee;
  margin: 10px;
  width: 100%;
  align-self: center;
  flex-direction: row;
`;

export default () => {
  const [list, setList] = useState(lista);
  return (
    <Page>
      <AddItemArea list={list} setList={setList} />
      <Listagem
        data={list}
        renderItem={(item) => {
          return <ListaItem data={item.item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </Page>
  );
};
