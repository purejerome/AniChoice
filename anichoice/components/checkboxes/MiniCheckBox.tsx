'use client'
import game_setting_ids from "@/data_types/check_box_ids";
import GameModeCheckBox from "./GameModeCheckBox";
import handleCheckBoxClick from "@/utils/handle_checkbox_click";

export default function MiniCheckBox(){
    function handleMiniCheckBox(){
        handleCheckBoxClick(game_setting_ids.MINI_SETTING_ID);
    }
    return (
        <div>
            <GameModeCheckBox id={game_setting_ids.MINI_SETTING_ID} checkFunction={handleMiniCheckBox} />
            <label htmlFor={game_setting_ids.MINI_SETTING_ID}>Mini</label>
        </div>
    );
}
