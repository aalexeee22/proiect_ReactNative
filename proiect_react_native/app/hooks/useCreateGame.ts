import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Game } from "../shared/types";
import { createGame } from "../api/game/createGame";

export default function useCreateGame() {
  const [game, setGame] = useState<Game | null>();
  const { user } = useAuth();

  useEffect(() => {
    const gatherData = async (): Promise<void> => {
      const response = await createGame(user?.accessToken);
      console.log("current game", response);
      setGame(response);
    };
    gatherData();
  }, []);
  return { game };
}
