import { useQuery } from "@tanstack/react-query";

const getCharacterDetail = async (id: string) => {
  const response = await fetch(`/api/characters/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch character detail");
  }
  return response.json();
};

export const useCharacterDetail = (id: string) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterDetail(id),
  });
};
