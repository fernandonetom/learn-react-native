import React, {useState} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';

export const AddItemArea = styled.View`
  background-color: #ccc;
  padding: 10px;
  width: 100%;
`;
export const Input = styled.TextInput`
  background-color: #fff;
  font-size: 15px;
  height: 50px;
  border-radius: 5px;
  padding: 5px;
`;
export default (props) => {
  const [task, setTask] = useState('');

  const handleSubmit = () => {
    if (task.trim().length > 0) {
      props.setList([{task: task.trim(), done: false}, ...props.list]);
    } else {
      Alert.alert(
        'Erro',
        'Você deixou sua tarefa em branco',
        [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
    setTask('');
  };
  return (
    <AddItemArea>
      <Input
        placeholder="Digite um novo item"
        value={task}
        onChangeText={(e) => setTask(e)}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
    </AddItemArea>
  );
};
