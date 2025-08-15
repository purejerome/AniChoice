import base_get_random_characters from "@/utils/basic_get_random_characters";
import SimpleCharacter from "@/data_types/simple_character";
import GameBoard from "@/components/game/GameBoard";

export default async function PlayPage() {
    
    let body = null;
    try {
        const characters: SimpleCharacter[] = await base_get_random_characters();
        body = <GameBoard characters={characters} />;
        console.log(characters.length);
    } catch {
        body = <p>Error loading characters.</p>;
    }

    return (
        <div>
            {body}
        </div>
    );
}
