import base_get_random_characters from "@/utils/basic_get_random_characters";
import SimpleCharacter from "@/data_types/simple_character";
import GameBoard from "@/components/game/GameBoard";
import GameSettings from "@/data_types/game_settings";

export default async function PlayPage() {
    
    let body = null;
    try {
        const characters: SimpleCharacter[] = await base_get_random_characters();
        body = <GameBoard characters={characters} />;
    } catch {
        body = <p>Error loading characters.</p>;
    }

    return (
        <main className="flex flex-col items-center justify-center min-w-screen min-h-screen">
            {body}
        </main>
    );
}
