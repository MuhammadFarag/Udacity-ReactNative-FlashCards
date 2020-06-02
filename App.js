import * as React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
const decks = [
  {name: "deck 1", cards: 3},
  {name: "deck 2", cards: 0},
  {name: "deck 3", cards: 15}
]

function Deck({name, cards}) {
  return (
    <View style={styles.item}>
      <Text style={styles.deckName}>{name}</Text>
      <Text style={styles.deckCards}>{cards} Cards</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({item: deck}) => <Deck name={deck.name} cards={deck.cards}/>}
        keyExtractor={deck => deck.name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  deckName: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  deckCards: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
});
