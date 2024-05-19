import { config } from "../../config";

export const listAvailableGames = async (token: string) => {
    let data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(`${config.API_URL}/game`, data);
    return await response.json();
}