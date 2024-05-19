import { config } from "../../config";

export const me = async (token) => {
    let data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(`${config.API_URL}/user/details/me`, data);
    return await response.json();
}