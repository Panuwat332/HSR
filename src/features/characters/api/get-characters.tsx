import { useQuery } from "@tanstack/react-query";

const getCharacters = async () => {
  const response = await fetch("/api/characters");
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return response.json();
};

export const useCharacters = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: getCharacters
  });
};
