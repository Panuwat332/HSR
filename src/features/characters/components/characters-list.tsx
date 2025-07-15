"use client";

import React from 'react';
import Link from 'next/link';
import { useCharacters } from '../api/get-characters';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Character {
  id: number;
  name: string;
  rarity: number;
  path: string;
  element: string;
  release: string;
  introduction: string;
  img: string;
}

const CharactersList: React.FC = () => {
  const { data: characters, isLoading, error } = useCharacters();

  if (isLoading) return <div>Loading characters...</div>;
  if (error) return <div>Error loading characters: {error.message}</div>;
  if (!Array.isArray(characters) || characters.length === 0) {
    return <div>No characters found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {characters.map((character: Character) => (
        <Card key={character.id} className="shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-100 bg-white/80">
          <CardContent className="p-6 flex flex-col items-start">
            <h2 className="text-xl font-bold mb-2 text-blue-700">{character.name}</h2>
            <div className="flex gap-2 mb-2">
              <span className="text-sm bg-blue-100 px-2 py-1 rounded">{character.element}</span>
              <span className="text-sm bg-green-100 px-2 py-1 rounded">{character.path}</span>
              <span className="text-sm bg-yellow-100 px-2 py-1 rounded">★{character.rarity}</span>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-3 min-h-[60px]">{character.introduction}</p>
            <Button variant="outline" className="mt-auto self-end">
                <Link href={`/characters/${character.id}`}>
                    View Details
                </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CharactersList;