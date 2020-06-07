import {Button, Text, View} from "react-native";
import * as React from "react";

export function ViewDeck({navigation}) {
  return <View>
    <Text>View Deck</Text>
    <Button
      title="Add Card"
      onPress={() => {
        navigation.navigate('Add Card')
      }}
    />
    <Button
      title="Study Cards"
      onPress={() => {
        navigation.navigate('Study Cards')
      }}
    />
  </View>
}