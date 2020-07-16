import React, {useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import lista from './data/data.json';
import ListaItem from './ListaItem';
import AddItemArea from './AddItemArea';
import {SwipeListView} from 'react-native-swipe-list-view';
import ListaItemSwipe from './ListaItemSwipe';

const Page = styled.SafeAreaView`
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
  const deleteItem = (index) => {
    let listCopy = [...list];
    listCopy = listCopy.filter((item, indexNew) => {
      return index != indexNew ? true : false;
    });
    setList(listCopy);
  };
  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <SwipeListView
        data={list}
        renderItem={({item, index}) => {
          return <ListaItem data={item} onPress={() => toggleDone(index)} />;
        }}
        // renderHiddenItem={({index}) => {
        //   return <ListaItemSwipe onDelete={() => deleteItem(index)} />;
        // }}
        renderHiddenItem={({index}, items) => {
          return (
            <ListaItemSwipe
              onDelete={() => {
                items[index].closeRow();
                deleteItem(index);
              }}
            />
          );
        }}
        leftOpenValue={100}
        disableLeftSwipe={true}
        keyExtractor={(item, index) => index.toString()}
      />
    </Page>
  );
};
