import { config } from "../../config";

export const createGame = async (token: string) => {
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(`${config.API_URL}/game`, data);
    return await response.json();
}