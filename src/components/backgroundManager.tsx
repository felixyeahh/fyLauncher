// url("/assets/background.jpg")
import { useCookies } from "./cookieManager";
import { useState, useContext } from "react"
import { Popup } from "reactjs-popup";
import { BgPopUpContext } from "./context";

export function BackgroundComponent ({url}: {url?: string}) { 
    const [bgImage, setBgImage] = useState<string>("/assets/default_bg.jpg");

    if (url) {
        setBgImage(url);
    }

    const {isOpen} = useContext(BgPopUpContext);
    console.log("meow", isOpen);
    return (
        <div>
            <Popup open={isOpen}>
                <div id="BackgroundPopup" className="title-container">
                    <h1> Yuppie, its working~ </h1>
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
