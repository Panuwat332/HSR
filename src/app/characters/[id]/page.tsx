import CharacterDetail from "@/features/characters/components/character-detail";

type PageProps = {
  params: {
    id: string;
  };
};

export default function CharacterPage({ params }: PageProps) {
  return <CharacterDetail id={params.id} />;
}

