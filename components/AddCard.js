import {Button, Text, TextInput, View} from "react-native";
import * as React from "react";
import {useDispatch} from "react-redux";
import {addCard} from "../store";

export function AddCard({navigation, route: {params: {deckId}}}) {
  const [question, setQuestion] = React.useState('')
  const [answer, setAnswer] = React.useState('')

  const dispatch = useDispatch()

  return <View>
    <Text>Add Card</Text>
    <TextInput
      placeholder="Question"
      onChangeText={question => setQuestion(question)}
      value={question}
    />
    <TextInput
      placeholder="Answer"
      onChangeText={answer => setAnswer(answer)}
      value={answer}
    />
    <Button
      title="Press me"
      onPress={() => {
        dispatch(addCard(deckId, {question, answer}))
        setQuestion('')
        setAnswer('')
        navigation.navigate('Home');
      }}
    />

  </View>
}