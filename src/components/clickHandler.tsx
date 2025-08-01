import type { ButtonEntry } from "src/constants/buttons";
import { BgPopUpContext } from "./backgroundManager";
import { useContext } from "react";


function useScriptClickHandler(btn: ButtonEntry) {
    console.log(btn, btn.onClick, btn.onClick == "setBackground");

    const {setIsOpen} = useContext(BgPopUpContext);
    return function ScriptClickHandler() {
        switch (btn.onClick) {
            case "setBackground": 
                return setIsOpen(true);
            default: console.error("No script found");
        }
    }
}

export function OnClickHandler(btn: ButtonEntry) {
    switch (btn.type) {
        case ("link"):
            return; // Launch Web Page Here
        case ("script"):
            return useScriptClickHandler(btn);
        default:
            throw Error("Unsupported Button Type");
    }
}
