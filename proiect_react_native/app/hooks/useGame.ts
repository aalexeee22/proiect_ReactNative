import { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth';
import { getGame } from '../api/game/getGame';
import { Game } from '../shared/types';


export default function useGame(gameId: string) {
    const [game, setGame] = useState<Game| null>();
    const { user } = useAuth();

    useEffect(() => {
        const gatherData = async (): Promise<void> => {
            const response = await getGame(user?.accessToken, gameId);
            console.log("current game", response)
            setGame(response);
        };
        gatherData();
    }, [gameId]);
    return { game };
}
