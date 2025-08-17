'use client';
import SimpleCharacter from "@/data_types/simple_character";
import { useState } from "react";
import CharacterImageCard from "./CharacterImageCard";

export default function GameBoard({characters} : {characters: SimpleCharacter[]}) {
    const[current_character, setCurrentCharacter] = useState<number>(0);
    
    
    return (
        <div className="flex flex-col items-center justify-center">
            <CharacterImageCard src={characters[current_character].image} />
            <div className="flex items-center w-full">
                <button onClick={() => setCurrentCharacter((current_character + 1) % characters.length)}>Next</button>
                <button onClick={() => console.log(characters[current_character])}>Info</button>
            </div>
        </div>
    )
}
