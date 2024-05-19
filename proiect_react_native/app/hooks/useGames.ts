import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { me } from "../api/auth/me";
import { listAvailableGames } from "../api/game/listAvailableGames";
import { Game } from "../shared/types";

export default function useGames() {
  const [gamesList, setGamesList] = useState<Game[] | null>();
  const { user } = useAuth();
  useEffect(() => {
    const gatherData = async (): Promise<void> => {
      const response = await listAvailableGames(user?.accessToken);
      setGamesList(response.games);
    };
    gatherData();
  }, []);
  return { gamesList };
}
