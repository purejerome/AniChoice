'use client'

export default function TestCheck() {
    function addToSession(){
        const checkbox = document.getElementById("testCheckbox") as HTMLInputElement | null;
        if (checkbox?.checked){
            sessionStorage.setItem("testCheckbox", "hello there");
        } else {
            sessionStorage.removeItem("testCheckbox");
        }
    }
    
    return (
        <div>
            <input type="checkbox" id="testCheckbox" onClick={addToSession} />
            <label htmlFor="testCheckbox">Test Checkbox</label>
        </div>
    );
};
