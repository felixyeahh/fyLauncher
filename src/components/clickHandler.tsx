import type { ButtonEntry } from "src/constants/buttons";
import type { PopupContext } from "./context"

export function useScriptClickHandler(btn: ButtonEntry, context: PopupContext) {
    const {setIsOpen} = context;

    return function ScriptClickHandler() {
        switch (btn.onClick) {
            case "setBackground": 
                return setIsOpen(true);
            default: console.error("No script found");
        }
    }
}
