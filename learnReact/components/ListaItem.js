import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableHighlight`
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
`;

export default (props) => {
  return (
    <Item onPress={() => {}} underlayColor="#0000FF">
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck></ItemCheck>
      </>
    </Item>
  );
};
