import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useGames from "../../../hooks/useGames";
import { ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import useMe from "../../../hooks/useMe";
import { Game } from "../../../shared/types";

const index = () => {
  const router = useRouter();
  const { gamesList } = useGames();
  const { profileInfo } = useMe();
  console.log("gamesList", gamesList);

  const displayButtons = (game: Game) => {

    if (
      (game?.player1Id !== profileInfo?.user?.id && game?.player2Id === null) ||
      (game?.player2Id !== profileInfo?.user?.id && game?.player1Id === null)
    ) {
      return <Pressable
        style={styles.button}
        onPress={() => {
          console.log("Join game");
          router.push(`main/home/feed/join?id=${game.id}` as any);
        }}
      >
        <Text style={styles.text}>Join game</Text>
      </Pressable>;
    }
    if (
      game?.player1?.id === profileInfo?.user?.id ||
      game?.player2?.id === profileInfo?.user?.id
    ) {
      return (
        <Pressable
          style={styles.button}
          onPress={() => {
            console.log("Go to join");
            router.push(`main/home/feed/continue?id=${game.id}&player1=${game.player1Id}&player2=${game.player1Id}` as any);
          }}
        >
          <Text style={styles.text}>Continue game</Text>
        </Pressable>
      );
    }
    return (
      <Pressable
        style={styles.button}
        onPress={() => {
          console.log("Go to game");
          router.push(`main/home/feed/display?id=${game.id}` as any);
        }}
      >
        <Text style={styles.text}>See game</Text>
      </Pressable>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          marginHorizontal: 20,
        }}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#28a745" }]}
          onPress={() => {
            console.log("Start game");
            router.push(`main/home/feed/start` as any);
          }}
        >
          <Text style={styles.text}>Start Game</Text>
        </Pressable>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text>Games</Text>
        {
          // ?.filter((game) => game.status !== "MAP_CONFIG")
          gamesList?.map((game) => (
            <View key={game.id} style={styles.card}>
              <Text>Game id: {game.id}</Text>
              <Text>Game status: {game.status}</Text>

              {displayButtons(game)}
            </View>
          ))
        }
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 16,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    width: 350,
    height: 350,

    alignItems: "center",
    marginVertical: 10,
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

export default index;
