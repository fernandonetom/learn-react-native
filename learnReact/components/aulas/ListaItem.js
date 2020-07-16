import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableHighlight`
  padding-left: 20px;
  padding-right: 20px;
  background-color: #ccc;
  align-items: center;
  flex-direction: row;
  border-bottom-color: #333;
  border-bottom-width: 1px;
  height: 70px;
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
    <Item onPress={props.onPress} activeOpacity={1} underlayColor="#ddd">
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck done={props.data.done}></ItemCheck>
      </>
    </Item>
  );
};
