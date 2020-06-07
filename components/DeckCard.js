import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "../styles";
import * as React from "react";

export function DeckCard({id, name, cards, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('View Deck', {
          deckId: id
        });
      }}
    >
      <View style={styles.item}>
        <Text style={styles.deckName}>{name}</Text>
        <Text style={styles.deckCards}>{cards.length} Cards</Text>
      </View>
    </TouchableOpacity>
  );
}