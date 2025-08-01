import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

export type PopupContext = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>> 
}

export const BgPopUpContext = createContext<PopupContext>({
    isOpen: false,
    setIsOpen: () => {}
});
