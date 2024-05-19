import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Game } from "../shared/types";
import { createGame } from "../api/game/createGame";
import { sendStrike } from "../api/game/sendStrike";

export default function useJoinGame(gameId: string,pos: {x: string, y: number}) {
  const [game, setGame] = useState<Game | null>();
  const { user } = useAuth();

  useEffect(() => {
    const gatherData = async (): Promise<void> => {
      const response = await sendStrike(user?.accessToken, gameId, pos);
      console.log("sendStrike hooks", response);
      setGame(response);
    };
    gatherData();
  }, []);
  return { game };
}
