import {Button, Text, View} from "react-native";
import * as React from "react";
import {useSelector} from "react-redux";

export function StudyCards({route: {params: {deckId}}}) {
  const [counter, setCounter] = React.useState(0)
  const [showAnswer, setShowAnswer] = React.useState(false)
  const cards = useSelector(state => state.decks[deckId].cards)
  const [score, setScore] = React.useState({correct: 0, incorrect: 0})
  console.log("current question:", JSON.stringify(cards[counter]));

  if (counter >= cards.length) {
    return <View>
      <Text>Score: </Text>
      <Text>Correct: {score.correct}</Text>
      <Text>Incorrect: {score.incorrect}</Text>
    </View>
  }


  return <View>
    <Text>Question: ({counter + 1}/{cards.length}) </Text>


    <Text> {showAnswer ? cards[counter].answer : cards[counter].question}</Text>

    <Button
      title="Flip"
      onPress={() => {
        setShowAnswer(!showAnswer)
      }}
    />

    <Button
      title="Correct"
      onPress={() => {
        setCounter(counter + 1)
        setShowAnswer(false)
        setScore({correct: score.correct + 1, incorrect: score.incorrect})
      }}
    />

    <Button
      title="Incorrect"
      onPress={() => {
        setCounter(counter + 1)
        setShowAnswer(false)
        setScore({correct: score.correct, incorrect: score.incorrect + 1})

      }}
    />
  </View>
}