import {useSelector} from "react-redux";
import {FlatList} from "react-native";
import {Deck} from "./Deck";
import * as React from "react";

export function Decks({navigation}) {
  const decks = useSelector(state => Object.values(state.decks))

  return <FlatList
    data={decks}
    renderItem={({item: deck}) => <Deck name={deck.name} cards={deck.cards} navigation={navigation}/>}
    keyExtractor={deck => deck.name}
  />
}