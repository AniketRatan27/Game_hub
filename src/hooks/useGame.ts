import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getGameData(slug),
  });

export default useGame;
