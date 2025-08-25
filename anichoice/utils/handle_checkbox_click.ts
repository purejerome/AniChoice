import { GameSettingId } from "@/data_types/check_box_ids";
import GameSettings from "@/data_types/game_settings";
import { defaultGameSettings } from "@/data_types/game_settings";

export default function handleCheckBoxClick(gameSettingID: GameSettingId, checked: boolean){
        const gameSettingsSession = sessionStorage.getItem("gameSettings");
        let gameSettings: GameSettings = defaultGameSettings;
        try {
            gameSettings = JSON.parse(gameSettingsSession ?? JSON.stringify(defaultGameSettings));
        } catch {
            gameSettings = defaultGameSettings;
        }
        
        if (checked){
            gameSettings[gameSettingID as keyof GameSettings] = true;
        } else {
            gameSettings[gameSettingID as keyof GameSettings] = false;
        }
        
        sessionStorage.setItem("gameSettings", JSON.stringify(gameSettings));
    }
