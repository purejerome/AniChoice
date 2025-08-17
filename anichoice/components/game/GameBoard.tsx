'use client';
import SimpleCharacter from "@/data_types/simple_character";
import { useEffect, useState } from "react";
import CharacterImageCard from "./CharacterImageCard";
import GameSettings from "@/data_types/game_settings";

export default function GameBoard({characters} : {characters: SimpleCharacter[]}) {
    const [current_character, setCurrentCharacter] = useState<number>(0);
    const [cardVisible, setCardVisible] = useState<boolean>(true);
    const [blink, setBlink] = useState<boolean>(false);

    const testGameSettings: GameSettings = {
        pixelate: false,
        zoom: false,
        grayscale: false,
        spin: false,
        blink_and_miss: true,
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <CharacterImageCard 
                gameSettings={testGameSettings} 
                src={characters[current_character].image}
            />
            <div className="flex items-center w-full">
                <button onClick={() => setCurrentCharacter((current_character + 1) % characters.length)}>Next</button>
                <button onClick={() => console.log(characters[current_character])}>Info</button>
            </div>
        </div>
    )
}
