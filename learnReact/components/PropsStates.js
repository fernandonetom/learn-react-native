import React, {Component} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Hello = (props) => {
  return <Text>{props.children}</Text>;
};

export default () => {
  return (
    <Page>
      <Hello>Meu teste</Hello>
    </Page>
  );
};
