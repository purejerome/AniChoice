'use client';
import Image from "next/image";
import base_get_random_characters from "@/utils/basic_get_random_characters";
import { PIXEL_FACTOR, ZOOM_FACTOR } from "@/data_types/effect_factors";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import GameSettings from "@/data_types/game_settings";
import GuessState, { GuessStateType } from "@/data_types/guess_state";
import styles from './CharacterImage.module.css';

export default function CharacterImageCard({gameSettings, src, guessState} : {gameSettings: GameSettings, src: string, guessState: GuessStateType}){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const correctRef = useRef<HTMLDivElement>(null);
    const incorrectRef = useRef<HTMLDivElement>(null);
    const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);
    const [cardVisible, setCardVisible] = useState<boolean>(true);
    
    useEffect(() =>{
        if(guessState === GuessState.CORRECT) {
            const correct = correctRef.current;
            if (!correct) return;
            correct.onanimationend = () => {
                correct.classList.remove(styles.animate_answer_pulse);
            };
            correct.classList.add(styles.animate_answer_pulse);
        } else if (guessState === GuessState.INCORRECT) {
            const incorrect = incorrectRef.current;
            if (!incorrect) return;
            incorrect.onanimationend = () => {
                incorrect.classList.remove(styles.animate_answer_pulse);
            };
            incorrect.classList.add(styles.animate_answer_pulse);
        }
    }, [guessState]);

    useLayoutEffect(() => {
        setIsLoadingImage(true);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        const parent = canvas.parentElement?.parentElement;
        if (!parent) return;

        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;

        const img = new window.Image();
        img.src = src;
        img.onload = () => {
            const w = canvas.width;
            const h = canvas.height;
            
            ctx.clearRect(0, 0, w, h);
            if (gameSettings.pixelate) {
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(img, 0, 0, PIXEL_FACTOR, PIXEL_FACTOR);
                ctx.drawImage(canvas, 0, 0, PIXEL_FACTOR, PIXEL_FACTOR, 0, 0, w, h);
            } else {
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(img, 0, 0, w, h);
            }

            if(gameSettings.zoom) {
                const sWidth = w / ZOOM_FACTOR;
                const sHeight = h / ZOOM_FACTOR;
                
                const maxOffsetX = sWidth;
                const maxOffsetY = sHeight;

                const offsetX = (Math.random() * 2 - 1) * maxOffsetX;
                const offsetY = (Math.random() * 2 - 1) * maxOffsetY;

                let sx = w / 2 - sWidth / 2 + offsetX;
                let sy = h / 2 - sHeight / 2 + offsetY;

                sx = Math.max(0, Math.min(sx, w - sWidth));
                sy = Math.max(0, Math.min(sy, h - sHeight));

                ctx.drawImage(canvas, sx, sy, sWidth, sHeight, 0, 0, w, h);
            }
            setIsLoadingImage(false);

            if(gameSettings.blink_and_miss) {
                blinkCard();
            }
        };
    }, [src]);
    
    function blinkCard(){
        setCardVisible(true);
        setTimeout(() => {
            setCardVisible(false);
        }, 1000);
    }
    
    return (
        <div 
            className={`
                ${gameSettings.mini ? 'w-[10vw]' : 'w-[65vw]'}
                ${gameSettings.mini ? 'md:w-[4vw]' : 'md:w-[35vw]'}
                ${gameSettings.mini ? 'xl:w-[3vw]' : 'xl:w-[20vw]'}
                aspect-[2/3] 
                max-w-[900px] max-h-[800px]
                rounded-xl
                shadow-lg/40
                relative
                ${gameSettings.spin ? 'animate-spin' : ''}
            `}
            ref={containerRef}
        >
            <div 
                className={`${styles.correct_background}`}
                style={{display: isLoadingImage ? 'none' : 'block', zIndex: -1}}
                ref={correctRef}
            >
            </div>
            <div 
                className={`${styles.incorrect_background} `}
                style={{display: isLoadingImage ? 'none' : 'block', zIndex: -1}}
                ref={incorrectRef}
            >
            </div>
            <div className={`
                w-full h-full rounded-xl overflow-hidden
            `}
            style={{display: isLoadingImage ? 'none' : 'block', opacity: cardVisible ? 1 : 0, zIndex: 2}}
            >
                <canvas 
                    ref={canvasRef} 
                    className={`
                        w-full h-full object-cover
                        ${gameSettings.grayscale ? 'grayscale' : ''}
                        ${gameSettings.blur ? 'filter blur-sm' : ''}
                    `}
                >
                </canvas>
            </div>
            <div 
            className={`
            flex flex-col 
            items-center justify-center 
            w-full h-full object-cover 
            animate-pulse bg-gray-200
            rounded-xl overflow-hidden
            `}
            style={{display: isLoadingImage ? 'flex' : 'none', zIndex: 2}}
            >
                hello
            </div>
        </div>
    )

}

