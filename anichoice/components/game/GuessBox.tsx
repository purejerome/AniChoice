import GuessState, { GuessStateType } from "@/data_types/guess_state";

export default function GuessBox({guess, setGuess, guessState, handleGuess} : {guess: string; setGuess: (guess: string) => void; guessState: GuessStateType; handleGuess: () => void;}) {
    return (
        <input 
            type="text" 
            placeholder="Enter your guess..." 
            className="
                border 
                py-2 px-3.5 
                mt-2
                rounded-full
                " 
            value={guess} 
            onChange={(e) => setGuess(e.target.value)} 
            disabled={guessState === GuessState.CORRECT || guessState === GuessState.INCORRECT}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    handleGuess();
                }
            }}
        />
    );
};
