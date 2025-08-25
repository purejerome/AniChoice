'use client'
import game_setting_ids from "@/data_types/check_box_ids";
import handleCheckBoxClick from "@/utils/handle_checkbox_click";
import { useState } from "react";

export default function BlinkCheckBox(){
    const [checked, setChecked] = useState(false);
    
    function handleBlinkCheckBox(){
        const isChecked = !checked;
        setChecked(isChecked);
        handleCheckBoxClick(game_setting_ids.BLINK_SETTING_ID, isChecked);
    }
    return (
        <div className="
            flex 
            justify-center items-center
            rounded
            bg-[#CCCCFF]"  
            onClick={handleBlinkCheckBox}
        >
            Blink
        </div>
    );
}
