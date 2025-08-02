import { useCookies } from "./cookieManager";
import { useState, useContext, useEffect } from "react"
import { Popup } from "reactjs-popup";
import { BgPopUpContext } from "./context";
import type { FormEvent } from "react";

function BackgroundPopupComponent() {

}

export function BackgroundComponent ({url}: {url?: string}) { 
    const [bgImage, setBgImage] = useState<string>("/assets/default_bg.jpg");
    console.log(bgImage, url);
    useEffect(() => {
        if (typeof url === "string") {
            console.log(bgImage, url);
            setBgImage(url);
        }
    }, [url]);

    const {isOpen, setIsOpen} = useContext(BgPopUpContext);
    console.log("Making Background")
    const [backgroundValue, setBackground] = useCookies("background");
    console.log("Done");
    const updateBackground = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const url = (event.currentTarget.elements.namedItem("url") as HTMLInputElement).value;
        console.log(url);
        setBackground(url);
        return location.reload();
    }

    return (
        <div>
            <Popup open={isOpen} onClose={() => {setIsOpen(!isOpen)}}>
                <div id="BackgroundPopup" className="popup-container">
                    <form onSubmit={(event) => {updateBackground(event)}}> 
                        <label form="bg-url">Enter URL: </label>
                        <input type="text" id="bg-url" name="url" required/>
                        <input type="submit" value={"✔"}/>
                    </form>
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
