import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { me } from "../api/auth/me";

interface UserProfile {
  currentlyGamesPlaying: number;
  gamesLost: number;
  gamesPlayed: number;
  gamesWon: number;
  user: { id: string; email: string };
}

export default function useMe() {
  const [profileInfo, setProfileInfo] = useState<UserProfile | null>();
  const { user } = useAuth();

  useEffect(() => {
    const gatherData = async (): Promise<void> => {
      const response = await me(user?.accessToken);
      setProfileInfo(response);
    };
    gatherData();
  }, []);
  return { profileInfo };
}
