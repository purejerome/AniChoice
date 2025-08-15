import { RandomClient } from "@tutkli/jikan-ts";
import SimpleCharacter from "@/data_types/simple_character";

const randomClient = new RandomClient({
    cacheOptions: {
        location: 'server',
        ttl: 0,
    }
});

export default async function base_get_random_characters() {
    const characters_array: SimpleCharacter[] = [];
    let slots_filled = 0;
    while (slots_filled < 20) {
        const batchSize = 5;
        const results = await Promise.all(
            Array.from({ length: batchSize }, () => randomClient.getRandomCharacters())
        );
        console.log("results", results);
        for(const character of results) {
            const new_character = {
                id: character.data.mal_id,
                name: character.data.name,
                image: character.data.images.jpg.image_url,
                name_kanji: character.data.name_kanji
            };
            if (!characters_array.find(c => c.id === new_character.id) 
                && !new_character.image.includes("apple-touch-icon")) {
                characters_array.push(new_character);
                slots_filled++;
                if (characters_array.length >= 20) break;
            }
        }
        console.log(slots_filled)
        console.log(characters_array)
    }
    console.log("Final array:", characters_array.map(c => c.name));
    return characters_array;
}
