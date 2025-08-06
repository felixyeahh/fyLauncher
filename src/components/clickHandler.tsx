import type { ButtonEntry } from "src/constants/buttons";
import type { PopupContext } from "./context"

export default function useScriptClickHandler(btn: ButtonEntry, context: PopupContext) {
    const {isOpen, setIsOpen} = context;

    return function ScriptClickHandler() {
        switch (btn.onClick) {
            case "setBackground": 
                return setIsOpen(!isOpen);
            default: console.error("No script found");
        }
    }
}
