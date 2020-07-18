import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

const View = styled.View`
  flex-direction: row;
  background-color: #ccc;
`;
const Label = styled.Text`
  color: ${(props) => (props.focused ? '#FF0000' : '#000')};
`;
const Tab = styled.TouchableHighlight`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 60px;
`;
const HomeTab = styled.TouchableHighlight`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: #ffff00;
  margin-top: -20px;
  text-align: center;
`;
export default function CustomTabBar({state, descriptors, navigation}) {
  return (
    <View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        let label = route.name;

        options.tabBarLabel ? (label = options.tabBarLabel) : null;
        options.title ? (label = options.title) : null;

        const handleTabPress = () => {
          navigation.navigate(route.name);
        };
        if (route.name === 'TabHome') {
          return (
            <HomeTab
              underlayColor="#ffcc00"
              key={index}
              onPress={handleTabPress}>
              <Label focused={isFocused}>Home</Label>
            </HomeTab>
          );
        } else {
          return (
            <Tab key={index} underlayColor="#bbb" onPress={handleTabPress}>
              <Label focused={isFocused}>{label}</Label>
            </Tab>
          );
        }
      })}
    </View>
  );
}
