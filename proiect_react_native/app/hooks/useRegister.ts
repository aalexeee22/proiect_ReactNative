import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../api/auth/login";
import { register } from "../api/auth/register";
import useLogin from "./useLogin";

export default async function useRegister(email: string, password: string): Promise<{
    authError?: string
    accessToken?: string
} | null> {
    const responseRegister = await register({ email, password });
    if (responseRegister.code === 400 || responseRegister.code === 403 || responseRegister.code === 409) { 
      return { authError: responseRegister.message };
    }
    const { authError, accessToken } = await useLogin(email, password);
    if (authError) {
      return { authError: responseRegister.message };
    }
    return { accessToken }

}
