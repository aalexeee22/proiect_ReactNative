import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import useCreateGame from "../../../hooks/useCreateGame";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { sendStrike } from "../../../api/game/sendStrike";
import { useAuth } from "../../../../context/auth";
import { useEffect } from "react";
import useJoinGame from "../../../hooks/useJoinGame";
import { joinGame } from "../../../api/game/joinGame";

export default function Start() {
  const router = useRouter();
  const { user } = useAuth();
  const { game } = useCreateGame();

  useEffect(()=> {
    if(game && game.id) {
      // const gatherData = async (): Promise<void> => {
      //   const response = await joinGame(user?.accessToken, game.id);
      //   console.log("joinGame hooks", response)
      // };
      // gatherData();
    }
  },[game])

  console.log("game", game);
  // Letters
  const yAxis = Array.from(Array(10).keys()).map((val) =>
    (val + 10).toString(36).toUpperCase()
  );
  // Numbers
  const xAxis = Array.from(Array(10).keys()).map((val) => val + 1);

  const addMove = async (letter: string, number: number) => {
    console.log("add move", letter + " " + number);
    console.log("game.id", game.id);
    const response = await sendStrike(user?.accessToken, game.id, {
      x: letter,
      y: number,
    });
  };

  if (!game) {
    return (
      <View>
        <Text>Server is creating the game. Please wait...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          {
            flexDirection: "row",
            backgroundColor: "#6c757d",
          },
        ]}
        onPress={() => {
          router.push("feed/index");
        }}
      >
        <Ionicons name="arrow-back" size={20} color="white" />
        <Text style={styles.text}>Go back </Text>
      </Pressable>
      <Text>Start</Text>
      <View style={styles.numberCellContainer}>
        {xAxis.map((number, columnIndex) => (
          <View key={columnIndex} style={styles.numeberTextContainer}>
            <Text style={styles.numberText}>{number}</Text>
          </View>
        ))}
      </View>
      {yAxis.map((letter, rowIndex) => (
        <View key={rowIndex} style={styles.letterContainer}>
          <View style={styles.letterTextContainer}>
            <Text style={styles.letterText}>{letter}</Text>
          </View>
          {xAxis.map((number, columnIndex) => (
            <TouchableOpacity
              key={columnIndex}
              style={[styles.cellContainer]}
              onPress={() => addMove(letter, number)}
            >
              <Text>&nbsp;</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
  },
  numberCellContainer: {
    flexDirection: "row",
    marginLeft: 40,
  },
  numeberTextContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignContent: "center",
  },
  numberText: {
    textAlign: "center",
  },
  letterContainer: {
    flexDirection: "row",
    // borderColor: "red",
    // borderWidth: 1,
  },
  letterTextContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignContent: "center",
  },
  letterText: {
    color: "black",
    textAlign: "center",
  },

  boardCell: {
    flexDirection: "row",
    width: 40,
    height: 40,
  },
  boardCellText: {
    textAlign: "center",
    // lineHeight: 40,
    // marginHorizontal: 10
  },
  cellContainer: {
    flexDirection: "row",
    width: 40,
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    border: "50%",
    backgroundColor: "white",
  },
  text: {
    color: "white",
    fontWeight: "800",
    textTransform: "uppercase",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#0d6efd",
    marginTop: 8,
    borderRadius: 20,
    alignItems: "center",
  },
});
