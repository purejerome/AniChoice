'use client'
import game_setting_ids from "@/data_types/check_box_ids";
import GameModeCheckBox from "./GameModeCheckBox";
import handleCheckBoxClick from "@/utils/handle_checkbox_click";

export default function PixelCheckBox(){
    function handlePixelCheckBox(){
        handleCheckBoxClick(game_setting_ids.PIXEL_SETTING_ID);
    }
    return (
        <div>
            <GameModeCheckBox id={game_setting_ids.PIXEL_SETTING_ID} checkFunction={handlePixelCheckBox} />
            <label htmlFor={game_setting_ids.PIXEL_SETTING_ID}>Pixel</label>
        </div>
    );
}
