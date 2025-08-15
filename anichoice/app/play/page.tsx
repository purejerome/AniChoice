import base_get_random_characters from "@/utils/basic_get_random_characters";
import SimpleCharacter from "@/data_types/simple_character";
import CharacterImageCard from "@/components/CharacterImageCard";

export default async function PlayPage() {
    
    let body = null;
    try {
        const characters: SimpleCharacter[] = await base_get_random_characters();
        body = <CharacterImageCard src={characters[0].image} />;
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
