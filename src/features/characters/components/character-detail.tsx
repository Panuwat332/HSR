"use client";

import { useCharacterDetail } from "../api/get-character-detail";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

type CharacterDetailProps = {
  id: string;
};

const formatDate = (isoDate?: string) => {
  if (!isoDate) return "Unknown";
  const date = new Date(isoDate);
  return isNaN(date.getTime())
    ? "Unknown"
    : date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
};

const CharacterDetail = ({ id }: CharacterDetailProps) => {
  const {
    data: characterArray,
    isLoading,
    error,
  } = useCharacterDetail(id);

  const character = Array.isArray(characterArray)
    ? characterArray[0]
    : characterArray;

  console.log("character:", character);

  if (isLoading) {
    return (
      <div className="max-w-xl mx-auto">
        <Skeleton className="h-96 w-full mb-6 rounded-xl" />
        <Skeleton className="h-6 w-1/2 mb-2" />
        <Skeleton className="h-6 w-1/3 mb-2" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  if (error)
    return <div className="text-center text-red-500">Error loading character</div>;
  if (!character)
    return (
      <div className="text-center text-gray-500">Character not found</div>
    );

  return (
    <Card className="max-w-3xl mx-auto shadow-xl rounded-xl overflow-hidden">
      <CardContent className="p-6 flex flex-col md:flex-row gap-6">
        <img
          src={character.img || "/placeholder.png"}
          alt={character.name || "Character Image"}
          className="w-full md:w-60 h-auto rounded-xl object-cover shadow-md"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{character.name}</h1>

          <div className="flex gap-2 flex-wrap">
            <Badge variant="default">
              Rarity: {character.rarity ? `${character.rarity}★` : "N/A"}
            </Badge>
            <Badge variant="outline">
              Path: {character.path || "N/A"}
            </Badge>
            <Badge variant="outline">
              Element: {character.element || "N/A"}
            </Badge>
            <Badge variant="secondary">
              Released: {formatDate(character.release)}
            </Badge>
          </div>

          <p className="text-gray-700 text-base leading-relaxed">
            {character.introduction || "No description provided."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterDetail;
