import {Button, Text, View} from "react-native";
import * as React from "react";
import {useSelector} from "react-redux";

export function ViewDeck({navigation, route: {params: {deckId}}}) {
  const {name, cards} = useSelector(state => state.decks[deckId])

  return <View>
    <Text>{name}</Text>
    <Text>{cards.length} Cards</Text>
    <Button
      title="Add Card"
      onPress={() => {
        navigation.navigate('Add Card', {
          deckId: deckId
        })
      }}
    />
    <Button
      title="Study Cards"
      onPress={() => {
        navigation.navigate('Study Cards', {
          deckId: deckId
        })
      }}
    />
  </View>
}