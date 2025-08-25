'use client'
import SimpleCharacter from "@/data_types/simple_character";
import GuessBox from "./GuessBox";
import { useState } from "react";
import GuessState, { GuessStateType } from "@/data_types/guess_state";

export default function GuessSection({current_character, setCurrentCharacter, characters, guessState, setGuessState} :{
    current_character: number;
    setCurrentCharacter: (char: number) => void;
    characters: SimpleCharacter[];
    guessState: GuessStateType;
    setGuessState: (state: GuessStateType) => void;
}) {
    const [guess, setGuess] = useState<string>("");
    
    function nextCharacter(){
        setGuess("");
        if (current_character < characters.length - 1) {
            setGuessState(GuessState.GUESSING);
            setCurrentCharacter(current_character + 1);
        } else {
            setGuessState(GuessState.FINISHED);
            setCurrentCharacter(0);
        }
    }

    function handleGuess() {
        const cleanedGuess = guess.trim().toLowerCase();
        const cleanedName = characters[current_character].name.trim().toLowerCase();
        const cleanedKanjiName = characters[current_character].name_kanji?.trim().toLowerCase();
        const splitCleanedName = cleanedName.split(" ");
        const splitCleanedKanjiName = cleanedKanjiName?.split(" ");
        if (
            cleanedGuess === cleanedName || cleanedGuess === cleanedKanjiName
            || splitCleanedName.includes(cleanedGuess)
            || splitCleanedKanjiName?.includes(cleanedGuess)
        ) {
            setGuessState(GuessState.CORRECT);
        } else {
            setGuessState(GuessState.INCORRECT);
        }
    }

    let actionButton = null;
    if (guessState === GuessState.CORRECT || guessState === GuessState.INCORRECT) {
        actionButton = <button 
                            className="
                            bg-[#ffb0f4]
                            px-3 py-1
                            rounded-full
                            text-white
                            " 
                            onClick={nextCharacter}
                        >
                            Next
                        </button>;
    } else if (guessState === GuessState.GUESSING) {
        actionButton = <button 
                            className="
                                bg-[#ffb0f4]
                                px-3 py-1
                                rounded-full
                                text-white
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                                disabled:bg-[#ac7ba4d7]
                                " 
                            disabled={guess.trim() === ""} 
                            onClick={handleGuess}
                        >
                            Take a Guess
                        </button>;
    }

    return (
        <>
            <GuessBox guess={guess} setGuess={setGuess} guessState={guessState} handleGuess={handleGuess} />
                <div className="flex justify-center items-center w-[65vw]
                md:w-[35vw]
                xl:w-[20vw]
                mt-1
                ">
                    {actionButton}
                    <button onClick={() => console.log(characters[current_character])}>Info</button>
                </div>
        </>
    );
}
