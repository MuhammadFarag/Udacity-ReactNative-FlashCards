import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from "react-redux";
import {ViewDeck} from "./components/ViewDeck";
import {AddCard} from "./components/AddCard";
import {Quiz} from "./components/Quiz";
import {styles} from "./styles";
import {DeckList} from "./components/DeckList";
import {store} from "./store";
import {NewDeck} from "./components/NewDeck";

const Stack = createStackNavigator();
const Tabs = createMaterialTopTabNavigator();


function Home() {
  return <Tabs.Navigator
    tabBarOptions={{
      labelStyle: {fontSize: 12},
      style: {backgroundColor: "powderblue"},
    }}
  >
    <Tabs.Screen name="Deck List" component={DeckList}/>
    <Tabs.Screen name="New Deck" component={NewDeck}/>
  </Tabs.Navigator>;
}

export default function App() {
  return (
    <Provider store={store}>

      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="View Deck" component={ViewDeck}/>
            <Stack.Screen name="Add Card" component={AddCard}/>
            <Stack.Screen name="Quiz" component={Quiz}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

