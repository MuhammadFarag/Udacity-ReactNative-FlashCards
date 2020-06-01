import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const decks = [
  {name: "deck 1", cards: 3},
  {name: "deck 2", cards: 0},
  {name: "deck 3", cards: 15},
]
export default function App() {
  return (
    <View style={styles.container}>
      {decks.map( (deck) => {
        return <View key={deck.name}>
          <Text style={styles.welcome}>{deck.name}</Text>
          <Text style={styles.welcome}>{deck.cards} Cards</Text>
        </View>
      } )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
