import { config } from "../../config";

export const getGame = async (token: string, gameId: string) => {
    let data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(`${config.API_URL}/game/${gameId}`, data);
    return await response.json();
}