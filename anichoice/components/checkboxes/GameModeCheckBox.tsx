'use client'

export default function GameModeCheckBox({id, checkFunction} : {id: string, checkFunction: () => void}) {
    function handleToSession(){
        checkFunction();
    }
    
    return <input type="checkbox" id={id} onClick={handleToSession} />;
};
