'use client';
import Image from "next/image";
import base_get_random_characters from "@/utils/basic_get_random_characters";
import { useEffect, useRef, useState } from "react";

export default function CharacterImageCard({src} : {src: string}){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);

    useEffect(() => {
        console.log("inside")
        setIsLoadingImage(true);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        const parent = canvas.parentElement;
        if (!parent) return;

        // Set canvas resolution to match container size
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;

        const img = new window.Image();
        img.src = src;
        img.onload = () => {
            // Pixelation settings
            const pixelSize = 16; // Change for more/less pixelation
            const w = canvas.width;
            const h = canvas.height;

            // Draw image at low resolution
            // ctx.clearRect(0, 0, w, h);
            ctx.imageSmoothingEnabled = false;
            // ctx.drawImage(img, 0, 0, w, h);
            ctx.drawImage(img, 0, 0, pixelSize, pixelSize);
            // Scale up to fill canvas
            ctx.drawImage(canvas, 0, 0, pixelSize, pixelSize, 0, 0, w, h);
            setIsLoadingImage(false);
        };
    }, [src]);
    
    
    return (
        <div className="
            w-[65vw]
            md:w-[35vw]
            xl:w-[20vw]
            aspect-[2/3] 
            max-w-[900px] max-h-[800px]
            rounded-lg overflow-hidden
            shadow-lg/40
            relative
        ">
            {/* <Image
                src={src}
                alt="Character Image"
                unoptimized
                width={0}
                height={0}
                className="w-full h-full object-cover"
            /> */}
            <canvas 
                ref={canvasRef} 
                className="w-full h-full object-cover"
                style={{display: isLoadingImage ? 'none' : 'block'}}
            >
            </canvas>
            <div 
            className="
            flex flex-col 
            items-center justify-center 
            w-full h-full object-cover 
            animate-pulse bg-gray-200"
            style={{display: isLoadingImage ? 'flex' : 'none'}}
            >
                hello
            </div>
            {/* <canvas ref={canvasRef} className="w-full h-full object-cover"></canvas> */}
        </div>
    )

}

