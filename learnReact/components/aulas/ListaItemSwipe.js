import React from 'react';
import styled from 'styled-components/native';

const ListaItemSwipe = styled.View`
  flex: 1;
  background-color: #ccc;
  justify-content: space-between;
  flex-direction: row;
`;
const Text = styled.Text``;
const Delete = styled.TouchableHighlight`
  width: 100px;
  background-color: #ff0000;
`;
const Save = styled.TouchableHighlight`
  width: 100px;
  background-color: #00ff00;
`;

export default (props) => {
  return (
    <ListaItemSwipe>
      <Delete onPress={props.onDelete} underlayColor="#ff3333">
        <Text>Delete</Text>
      </Delete>
      <Save>
        <Text>Salvar</Text>
      </Save>
    </ListaItemSwipe>
  );
};
