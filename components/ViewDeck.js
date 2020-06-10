import {Animated, Button, Text} from "react-native";
import * as React from "react";
import {useSelector} from "react-redux";

export function ViewDeck({navigation, route: {params: {deckId}}}) {
  const {name, cards} = useSelector(state => state.decks[deckId])
  const opacity = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.timing(opacity, {toValue: 1, duration: 1000}).start()
  })

  return <Animated.View style={[{opacity}]}>
    <Text>{name}</Text>
    <Text>{cards.length} Cards</Text>
    <Button
      title="Add Card"
      onPress={() => {
        navigation.navigate('Add Card', {
          deckId: deckId
        })
      }}
    />
    <Button
      title="Study Cards"
      onPress={() => {
        navigation.navigate('Quiz', {
          deckId: deckId
        })
      }}
    />
  </Animated.View>
}