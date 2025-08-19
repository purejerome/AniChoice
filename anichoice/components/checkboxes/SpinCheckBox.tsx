'use client'
import game_setting_ids from "@/data_types/check_box_ids";
import GameModeCheckBox from "./GameModeCheckBox";
import handleCheckBoxClick from "@/utils/handle_checkbox_click";

export default function SpinCheckBox(){
    function handleSpinCheckBox(){
        handleCheckBoxClick(game_setting_ids.SPIN_SETTING_ID);
    }
    return (
        <div>
            <GameModeCheckBox id={game_setting_ids.SPIN_SETTING_ID} checkFunction={handleSpinCheckBox} />
            <label htmlFor={game_setting_ids.SPIN_SETTING_ID}>Spin</label>
        </div>
    );
}
