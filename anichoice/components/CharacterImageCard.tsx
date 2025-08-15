'use-client';
import Image from "next/image";
import base_get_random_characters from "@/utils/basic_get_random_characters";

export default async function CharacterImageCard({src} : {src: string}){
    // const characters = await base_get_random_characters();
    // console.log(characters);
    // console.log(characters[0].image);
    
    return (
        <div style={{ width: "600px", height: "1000px", position: "relative" }}>
            <Image
                src={src}
                alt="Character Image"
                unoptimized
                fill
                objectFit="cover"
                // style={{width: "100%", height: "100%"}}
            />
        </div>
    )

    // return (
        // <Image
        //     src={characters[0].image}
        //     alt={characters[0].name}
        //     unoptimized
        //     fill
        //     objectFit="contain"
        // />
    // );
}

