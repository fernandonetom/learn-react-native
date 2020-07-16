import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Page>
      <Text>Home page</Text>
    </Page>
  );
};
