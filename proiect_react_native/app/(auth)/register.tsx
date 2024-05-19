import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useAuth } from "../../context/auth";
import useRegister from "../hooks/useRegister";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState<string>();
  const { signIn } = useAuth();

  const onRegister = async () => {
    const { authError, accessToken } = await useRegister(email, password);
    console.log({ authError, accessToken } )
    if (authError) {
      setRegisterError(authError);
      return;
    }
    signIn({ accessToken });
};

return (
  <View style={styles.container}>
    <View style={styles.headerText}><Text>Create account</Text></View>
    <TextInput
      style={styles.textInput}
      value={email}
      placeholder="Email"
      onChangeText={(text) => setEmail(text)}
    />
    <TextInput
      style={styles.textInput}
      value={password}
      onChangeText={(text) => setPassword(text)}
      placeholder="Password"
      secureTextEntry
    />
    <View style={styles.separator} />
    {registerError ? <Text style= {{color: "red", marginVertical: 20}}>
      {registerError}
    </Text>: null}
    <Pressable 
    onPress={onRegister}
    style={styles.button}>
      <Text style={styles.text}>Register</Text>
    </Pressable>
    <Pressable  onPress={() => router.push("/login")} style={styles.button}>
      <Text style={styles.text}>Login</Text>
    </Pressable>
    
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 26,
    color: "black",
    fontWeight: 'bold',
    paddingVertical: 14,
  },
  separator: {
    marginTop: 16,
  },
  textInput: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 8,
    width: "60%",
    borderRadius: 32,
  },
  text: {
    textTransform: 'uppercase',
    color: "white",
    fontWeight: "bold"
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "60%",
    backgroundColor: "#0d6efd",
    marginTop: 8,
    alignItems: "center",
  },
});
