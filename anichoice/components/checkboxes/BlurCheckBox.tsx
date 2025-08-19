'use client'
import { BLUR_SETTING_ID } from "@/data_types/check_box_ids";
import GameModeCheckBox from "./GameModeCheckBox";

export default function BlurCheckBox(){
    function handleBlurCheckBox(){
        const checkbox = document.getElementById(BLUR_SETTING_ID) as HTMLInputElement | null;
        const gameSettingsSession = sessionStorage.getItem("gameSettings");
        let gameSettings: { [key: string]: boolean } = {};
        try {
            gameSettings = JSON.parse(gameSettingsSession ?? "{}");
        } catch {
            gameSettings = {};
        }
        
        if (checkbox?.checked){
            gameSettings[BLUR_SETTING_ID] = true;
        } else {
            gameSettings[BLUR_SETTING_ID] = false;
        }
        
        sessionStorage.setItem("gameSettings", JSON.stringify(gameSettings));
    }
    return (
        <div>
            <GameModeCheckBox id={BLUR_SETTING_ID} checkFunction={handleBlurCheckBox} />
            <label htmlFor={BLUR_SETTING_ID}>Blur</label>
        </div>
    );
}
