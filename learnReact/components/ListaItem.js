import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
  padding: 20px;
  background-color: #ccc;
  width: 100%;
  align-self: center;
  flex-direction: row;
  border-bottom-color: #333;
  border-bottom-width: 1px;
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
  background-color: ${(props) =>
    props.done === 'true' ? '#0000ff' : 'transparent'};
`;

export default (props) => {
  return (
    <Item onPress={props.onPress}>
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck done={props.data.done}></ItemCheck>
      </>
    </Item>
  );
};
