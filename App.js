import * as React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
const decks = [
  {name: "deck 1", cards: 3},
  {name: "deck 2", cards: 0},
  {name: "deck 3", cards: 15}
]

function Item({name, cards}) {
  return (
    <View style={styles.item}>
      <Text style={styles.welcome}>{name}</Text>
      <Text style={styles.welcome}>{cards} Cards</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({item}) => <Item name={item.name} cards={item.cards}/>}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
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
