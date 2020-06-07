import * as React from "react";
import {useDispatch} from "react-redux";
import {Button, Text, TextInput, View} from "react-native";
import {newDeck} from "../store";

export function NewDeck({navigation}) {
  const [text, setText] = React.useState('')
  const dispatch = useDispatch()

  return <View>
    <Text>Add Deck</Text>
    <TextInput
      placeholder="Name"
      onChangeText={text => setText(text)}
      value={text}
    />
    <Button
      title="Press me"
      onPress={() => {
        dispatch(newDeck(text))
        setText('')
        navigation.navigate('Home');
      }}
    />
  </View>
}