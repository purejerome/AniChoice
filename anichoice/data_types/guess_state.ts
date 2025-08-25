const GuessState = {
    GUESSING: "guessing",
    CORRECT: "correct",
    INCORRECT: "incorrect",
    FINISHED: "finished"
} as const;

export type GuessStateType = typeof GuessState[keyof typeof GuessState];

export default GuessState;

