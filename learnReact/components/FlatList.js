import React, {useState} from 'react';
import {Image, Text} from 'react-native';
import styled from 'styled-components/native';
import lista from './data/data.json';
import ListaItem from './ListaItem';
import AddItemArea from './AddItemArea';

const Page = styled.SafeAreaView`
  flex: 1;
`;
const Listagem = styled.FlatList`
  background-color: #fff;
  flex: 1;
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

  const addNewItem = (item) => {
    setList([{task: item, done: false}, ...list]);
  };
  const toggleDone = (index) => {
    let listCopy = [...list];
    if (listCopy[index].done === 'true') {
      listCopy[index].done = 'false';
    } else {
      listCopy[index].done = 'true';
    }
    setList(listCopy);
  };
  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <Listagem
        data={list}
        renderItem={({item, index}) => {
          return <ListaItem data={item} onPress={() => toggleDone(index)} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </Page>
  );
};
