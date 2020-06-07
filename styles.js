import {StyleSheet} from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
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