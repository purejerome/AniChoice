'use client'
import game_setting_ids from "@/data_types/check_box_ids";
import handleCheckBoxClick from "@/utils/handle_checkbox_click";
import { useState } from "react";

export default function MiniCheckBox(){
    const [checked, setChecked] = useState(false);

    function handleMiniCheckBox(){
        const isChecked = !checked;
        setChecked(isChecked);
        handleCheckBoxClick(game_setting_ids.MINI_SETTING_ID, isChecked);
    }
    return (
        <div className="
            flex 
            justify-center items-center
            rounded
            bg-[#8f99fb]" 
            onClick={handleMiniCheckBox}
        >
            Mini
        </div>
    );
}
