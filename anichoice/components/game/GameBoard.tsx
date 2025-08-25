'use client';
import SimpleCharacter from "@/data_types/simple_character";
import { useEffect, useLayoutEffect, useState } from "react";
import CharacterImageCard from "./CharacterImageCard";
import GameSettings from "@/data_types/game_settings";
import { useRouter } from 'next/navigation';
import GuessSection from "./GuessSection";
import GuessState, { GuessStateType } from "@/data_types/guess_state";

export default function GameBoard({characters, gameSettings} : {characters: SimpleCharacter[], gameSettings: GameSettings}) {
    const router = useRouter();
    const [current_character, setCurrentCharacter] = useState<number>(0);
    const [guessState, setGuessState] = useState<GuessStateType>(GuessState.GUESSING);

    const testGameSettings: GameSettings = {
        pixelate: true,
        zoom: true,
        grayscale: true,
        spin: false,
        blink_and_miss: false,
        blur: true,
        mini: false
    };
    
    useEffect(() => {
            window.onbeforeunload = () => {
                sessionStorage.removeItem('gameSettings');
            };
            return () => {
                window.onbeforeunload = null;
            };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <CharacterImageCard 
                gameSettings={gameSettings} 
                src={characters[current_character].image}
                guessState={guessState}
            />
            {guessState === GuessState.CORRECT && <p>Correct!</p>}
            {guessState === GuessState.INCORRECT && <p>Incorrect!</p>}
            <GuessSection
                current_character={current_character}
                setCurrentCharacter={setCurrentCharacter}
                characters={characters}
                guessState={guessState}
                setGuessState={setGuessState}
            />
        </div>
    )
}
