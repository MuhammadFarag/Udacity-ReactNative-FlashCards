import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from "react-redux";
import {ViewDeck} from "./components/ViewDeck";
import {AddCard} from "./components/AddCard";
import {StudyCards} from "./components/StudyCards";
import {styles} from "./styles";
import {Decks} from "./components/Decks";
import {store} from "./store";
import {AddDeck} from "./components/AddDeck";

const Stack = createStackNavigator();
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

