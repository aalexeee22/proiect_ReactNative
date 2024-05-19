import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../api/auth/login";

export default async function useLogin(email: string, password: string): Promise<{
    authError?: string
    accessToken?: string
} | null> {
    const responseLogin = await login({ email, password });
    if (responseLogin.code === 403 || responseLogin.code === 400) { 
      return { authError: responseLogin.message };
    }
    await AsyncStorage.setItem(
      "user",
      JSON.stringify({ accessToken: responseLogin.accessToken })
    );
    return {  accessToken: responseLogin.accessToken};
}
