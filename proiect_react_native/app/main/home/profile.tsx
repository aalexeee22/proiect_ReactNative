import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useMe from "../../hooks/useMe";

export default function Profile() {
  const { signOut } = useAuth();
  const { profileInfo } = useMe();
  const onLogOut = async () => {
    await AsyncStorage.removeItem("user");
    signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.profileHeader}>User Profile</Text>
      <Text style={styles.profileHeader}>User id: {profileInfo?.user?.id}</Text>
      <Text style={styles.profileHeader}>
        User email: {profileInfo?.user?.email}
      </Text>
      <Text style={styles.profileHeader}>
        Currently games playing: {profileInfo?.currentlyGamesPlaying}
      </Text>
      <Text style={styles.profileHeader}>
        No. lost games: {profileInfo?.currentlyGamesPlaying}
      </Text>
      <Text style={styles.profileHeader}>
        No. played games: {profileInfo?.currentlyGamesPlaying}
      </Text>
      <Text style={styles.profileHeader}>
        No. won games: {profileInfo?.currentlyGamesPlaying}
      </Text>

      <Pressable onPress={onLogOut} style={styles.button}>
        <Text style={{ color: "white" }}>Log Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 20,
  },
  profileHeader: {
    fontSize: 20,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "60%",
    backgroundColor: "#0d6efd",
    marginTop: 8,
    borderRadius: 32,
    alignItems: "center",
  },
});
