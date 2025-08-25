'use client'
import { useEffect } from "react";
import BlinkCheckBox from "./BlinkCheckBox";
import BlurCheckBox from "./BlurCheckBox";
import GrayScaleCheckBox from "./GrayScaleCheckBox";
import MiniCheckBox from "./MiniCheckBox";
import PixelCheckBox from "./PixelCheckBox";
import SpinCheckBox from "./SpinCheckBox";
import ZoomCheckBox from "./ZoomCheckBox";
import { defaultGameSettings } from "@/data_types/game_settings";
// min-h-screen 
//             flex flex-wrap
//             justify-center
//             gap-4 px-4 py-4
export default function CheckBoxSection() {

    useEffect(() =>{
        sessionStorage.setItem('gameSettings', JSON.stringify(defaultGameSettings));
    }, []);

    return (
    <div className="flex flex-col w-full bg-[#ffb0f4]">
        <div className="
            min-h-screen 
            grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] 
            gap-4 px-4 py-4
        ">
            <BlurCheckBox />
            <ZoomCheckBox />
            <PixelCheckBox />
            <MiniCheckBox />
            <GrayScaleCheckBox />
            <SpinCheckBox />
            <BlinkCheckBox />
        </div>
    </div>
    );
}
