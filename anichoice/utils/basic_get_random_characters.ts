import { RandomClient } from "@tutkli/jikan-ts";

const randomClient = new RandomClient({
    cacheOptions: {
        location: 'client',
        ttl: 0, // No caching, always fetch new data
    }
});

export default async function base_get_random_characters() {
    const characters_array: SimpleCharacter[] = [];
    let slots_filled = 0;
    while (slots_filled < 20) {
        // Always make a new request, no cache
        const character = await randomClient.getRandomCharacters();
        const new_character = {
            id: character.data.mal_id,
            name: character.data.name,
            image: character.data.images.jpg.image_url,
            name_kanji: character.data.name_kanji
        };
        if (!characters_array.find(c => c.name === new_character.name)) {
            characters_array.push(new_character);
            slots_filled++;
        }
        console.log(slots_filled);
        console.log(new_character);
    }
    return characters_array;
}
