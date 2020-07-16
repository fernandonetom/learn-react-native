import React, {useState} from 'react';
import {Image, Text} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  const [status, setStatus] = useState('');
  return (
    <Page>
      <Image
        source={require('./images/gato-coronavirus.jpg')}
        style={{width: 200, height: 200}}
        resizeMode="cover"
      />
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={{width: 200, height: 200}}
        resizeMode="cover"
        defaultSource={require('./images/placeholder.png')}
        onLoadStart={() => setStatus('Loading')}
        onLoad={() => setStatus('Loaded')}
        onError={(e) => alert(e.nativeEvent.error)}
      />
      <Text>{status}</Text>
    </Page>
  );
};
