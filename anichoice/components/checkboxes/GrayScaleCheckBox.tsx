'use client'
import game_setting_ids from "@/data_types/check_box_ids";
import GameModeCheckBox from "./GameModeCheckBox";
import handleCheckBoxClick from "@/utils/handle_checkbox_click";

export default function GrayScaleCheckBox(){
    function handleGrayScaleCheckBox(){
        handleCheckBoxClick(game_setting_ids.GRAYSCALE_SETTING_ID);
    }
    return (
        <div>
            <GameModeCheckBox id={game_setting_ids.GRAYSCALE_SETTING_ID} checkFunction={handleGrayScaleCheckBox} />
            <label htmlFor={game_setting_ids.GRAYSCALE_SETTING_ID}>Grayscale</label>
        </div>
    );
}
