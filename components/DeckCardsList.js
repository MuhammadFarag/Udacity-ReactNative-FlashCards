import {useSelector} from "react-redux";
import {FlatList} from "react-native";
import {DeckCard} from "./DeckCard";
import * as React from "react";

export function DeckCardsList({navigation}) {
  const decks = useSelector(state => Object.values(state.decks))

  return <FlatList
    data={decks}
    renderItem={({item: deck}) => <DeckCard id={deck.id} name={deck.name} cards={deck.cards} navigation={navigation}/>}
    keyExtractor={deck => deck.name}
  />
}