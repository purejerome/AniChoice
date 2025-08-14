import Image from "next/image";
import base_get_random_characters from "@/utils/basic_get_random_characters";

export default async function TestImage(){
    const characters = await base_get_random_characters();
    console.log(characters);
    console.log(characters[0].image);

    return (
        <Image
            src={characters[0].image}
            alt={characters[0].name}
            unoptimized
            fill
            objectFit="contain"
        />
    );
}

