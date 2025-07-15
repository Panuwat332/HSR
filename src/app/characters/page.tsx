import CharactersList from "@/features/characters/components/characters-list";

const CharactersPage = () => {
  return (
    <div className="bg-zinc-300 min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-center font-mono">Characters</h1>
      <CharactersList />
    </div>
  );
};

export default CharactersPage;
