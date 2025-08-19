import { GameSettingId } from "@/data_types/check_box_ids";

export default function handleCheckBoxClick(gameSettingID: GameSettingId){
        const checkbox = document.getElementById(gameSettingID) as HTMLInputElement | null;
        const gameSettingsSession = sessionStorage.getItem("gameSettings");
        let gameSettings: { [key: string]: boolean } = {};
        try {
            gameSettings = JSON.parse(gameSettingsSession ?? "{}");
        } catch {
            gameSettings = {};
        }
        
        if (checkbox?.checked){
            gameSettings[gameSettingID] = true;
        } else {
            gameSettings[gameSettingID] = false;
        }
        
        sessionStorage.setItem("gameSettings", JSON.stringify(gameSettings));
    }
