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

export type FrameOpenContextType = {
    isFrameOpen: boolean,
    setIsFrameOpen: Dispatch<SetStateAction<boolean>>,
    activeUrl: string | null,
    setActiveUrl:  Dispatch<SetStateAction<string | null>>,
}

export const FrameOpenContext = createContext<FrameOpenContextType>({
    isFrameOpen: false,
    setIsFrameOpen: () => {},
    activeUrl: null,
    setActiveUrl: () => {}
})
