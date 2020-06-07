import * as React from 'react';
import {Alert, Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {combineReducers, createStore} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {Provider} from "react-redux";

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
  const decks = useSelector(state => Object.values(state.decks))

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

  const dispatch = useDispatch()


  React.useEffect(() => {
    dispatch(newDeck("Deck 1"))
    dispatch(newDeck("Deck 2"))
    dispatch(newDeck("Deck 3"))


  }, [dispatch])



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

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function decksReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_DECK":
      const id = generateUID()
      state = {
        ...state,
        [id]: action.deck
      }
      return state
    default:
      return state
  }
}

function newDeck(name) {
  return {
    type: "ADD_DECK",
    deck: {name: name, cards: 0}
  }
}

export const store = createStore(combineReducers({decks: decksReducer}))

export default function App() {
  return (
    <Provider store={store}>

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
    </Provider>
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
