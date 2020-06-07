import {useSelector} from "react-redux";
import {FlatList} from "react-native";
import {DeckListItem} from "./DeckListItem";
import * as React from "react";

export function DeckList({navigation}) {
  const decks = useSelector(state => Object.values(state.decks))

  return <FlatList
    data={decks}
    renderItem={({item: deck}) => <DeckListItem id={deck.id} name={deck.name} cards={deck.cards}
                                                navigation={navigation}/>}
    keyExtractor={deck => deck.name}
  />
}