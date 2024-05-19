import { config } from "../../config";

export const register = async (user) => {
    let data = {
        method: 'POST',
        body: JSON.stringify({
            email: user.email,
            password: user.password
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const response = await fetch(`${config.API_URL}/auth/register`, data);
    return await response.json();
}