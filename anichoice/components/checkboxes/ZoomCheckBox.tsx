'use client'
import game_setting_ids from "@/data_types/check_box_ids";
import GameModeCheckBox from "./GameModeCheckBox";
import handleCheckBoxClick from "@/utils/handle_checkbox_click";

export default function ZoomCheckBox(){
    function handleZoomCheckBox(){
        handleCheckBoxClick(game_setting_ids.ZOOM_SETTING_ID);
    }
    return (
        <div>
            <GameModeCheckBox id={game_setting_ids.ZOOM_SETTING_ID} checkFunction={handleZoomCheckBox} />
            <label htmlFor={game_setting_ids.ZOOM_SETTING_ID}>Zoom</label>
        </div>
    );
}
