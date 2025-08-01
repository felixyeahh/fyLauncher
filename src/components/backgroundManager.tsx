// url("/assets/background.jpg")
import { useCookies } from "./cookieManager";
import { useState, useContext } from "react"
import type { Dispatch, SetStateAction } from "react";
import { Popup } from "reactjs-popup";
import { createContext } from "react";

type PopupContext = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>> 
}

export const BgPopUpContext = createContext<PopupContext>({
    isOpen: false,
    setIsOpen: () => {}
});

export function setBackground (url?: string) { 
    const [bgImage, setBgImage] = useState<string>("/assets/default_bg.jpg");

    if (url) {
        setBgImage(url);
    }

    const {isOpen} = useContext(BgPopUpContext);

    return (
        <div>
            <Popup open={isOpen}>
                <div>
                    <h1>Wassup my ninjas</h1>
                </div>
            </Popup>
            <div id="background"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                }}>
            </div>
        </div>
    )
}

export function updateBackground (url: string) {
    const bg = useCookies("background");

    bg[1](url);
    return location.reload();
}
