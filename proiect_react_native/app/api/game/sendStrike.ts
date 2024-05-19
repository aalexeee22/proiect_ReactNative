import { config } from "../../config";

export const sendStrike = async (token: string, gameId: string, pos: {x: string, y: number}) => {
    let data = {
        method: 'POST',
        body: JSON.stringify(pos),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(`${config.API_URL}/game/strike/${gameId}`, data);
    return await response.json();
}