import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "../styles";
import * as React from "react";

export function DeckCard({name, cards, navigation}) {
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