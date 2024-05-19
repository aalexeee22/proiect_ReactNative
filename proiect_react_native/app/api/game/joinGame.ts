import { config } from "../../config";

export const joinGame = async (token: string, gameId: string) => {
    let data = {
        method: 'POST',
        body: JSON.stringify({
            gameId
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(`${config.API_URL}/game/join/${gameId}`, data);
    return await response.json();
}