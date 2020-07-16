import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Modal} from 'react-native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;
const Box = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ff0000;
  align-items: center;
  justify-content: center;
`;
const BoxBody = styled.View`
  width: 90%;
  height: 200px;
  background-color: #333;
  border-radius: 10px;
`;
const Botao = styled.Button``;

export default () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Page>
      <Botao title="Abrir modal" onPress={() => setModalVisible(true)} />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        statusBarTranslucent={true}>
        <Box>
          <BoxBody>
            <Botao
              title="Fechar modal"
              onPress={() => setModalVisible(false)}
            />
          </BoxBody>
        </Box>
      </Modal>
    </Page>
  );
};
