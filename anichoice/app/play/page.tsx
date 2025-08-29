'use client'
import base_get_random_characters from "@/utils/basic_get_random_characters";
import SimpleCharacter from "@/data_types/simple_character";
import GameBoard from "@/components/game/GameBoard";
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import GameSettings from "@/data_types/game_settings";
import LoadingPage from "@/components/LoadingPage";

export default function PlayPage() {
    const [characters, setCharacters] = useState<SimpleCharacter[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();
    const hasFetched = useRef(false);

    // useLayoutEffect(() => {
    //     const settings = sessionStorage.getItem('gameSettings');
    //     if (!settings) {
    //         router.push('/');
    //     }
    // }, []);

    async function fetchCharacters() {
        try {
            const chars = await base_get_random_characters();
            setCharacters(chars);
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
        setLoading(false);
    }

    // const fetchCharacters = async () => {
    //     try {
    //         const chars = await base_get_random_characters();
    //         setCharacters(chars);
    //     } catch (error) {
    //         console.error("Error fetching characters:", error);
    //     }
    //     setLoading(false);
    // };

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        fetchCharacters();
    }, []);
    
    const settings = sessionStorage.getItem('gameSettings');
    if (!settings) {
        router.push('/');
        return null;
    }

    let body = null;
    if (loading){
        body = <LoadingPage />
    } else {
        if (characters) {
            const rawSettings = sessionStorage.getItem('gameSettings');
            const settings = rawSettings ? JSON.parse(rawSettings) as GameSettings : null;
            if (!settings) {
                return <p>Error loading game settings.</p>;
            }
            body = <GameBoard characters={characters} gameSettings={settings} />;
        } else {
            body = <p>Error loading characters.</p>;
        }
    }

    return (
        <main className="flex flex-col items-center justify-center min-w-screen min-h-screen">
            {body}
        </main>
    );
}
