import * as React from 'react';
import {Alert, Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const decks = [
  {name: "deck 1", cards: 3},
  {name: "deck 2", cards: 0},
  {name: "deck 3", cards: 15}
]

function Deck({name, cards, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Pressed ", name)
        navigation.navigate('Deck');
      }}
    >
      <View style={styles.item}>
        <Text style={styles.deckName}>{name}</Text>
        <Text style={styles.deckCards}>{cards} Cards</Text>
      </View>
    </TouchableOpacity>
  );
}

function ViewDeck({navigation}) {
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

function AddCard() {
  return <View>
    <Text>Add Card</Text>
  </View>
}

function StudyCards() {
  return <View>
    <Text>Study Cards</Text>
  </View>
}

const Stack = createStackNavigator();

function Decks({navigation}) {
  return <FlatList
    data={decks}
    renderItem={({item: deck}) => <Deck name={deck.name} cards={deck.cards} navigation={navigation}/>}
    keyExtractor={deck => deck.name}
  />
}

function AddDeck() {
  const [text, setText] = React.useState('')
  return <View>
    <Text>Add Deck</Text>
    <TextInput
      placeholder="Name"
      onChangeText={text => setText(text)}
      value={text}
    />
    <Button
      title="Press me"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
  </View>
}

const Tabs = createMaterialTopTabNavigator();


function Home() {
  return <Tabs.Navigator
    tabBarOptions={{
      labelStyle: {fontSize: 12},
      style: {backgroundColor: "powderblue"},
    }}
  >
    <Tabs.Screen name="Home" component={Decks}/>
    <Tabs.Screen name="Add Deck" component={AddDeck}/>
  </Tabs.Navigator>;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Deck" component={ViewDeck}/>
          <Stack.Screen name="Add Card" component={AddCard}/>
          <Stack.Screen name="Study Cards" component={StudyCards}/>
        </Stack.Navigator>
      </NavigationContainer>
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
