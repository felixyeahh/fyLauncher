import { useCookies } from "./cookieManager";
import { useState, useContext, useEffect } from "react"
import { Popup } from "reactjs-popup";
import { BgPopUpContext } from "./context";
import type { FormEvent } from "react";

type BackgroundComponentPopupProps = {
    open: boolean, 
    onClose : () => void,
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

function BackgroundPopupComponent(props: BackgroundComponentPopupProps) {
    return <Popup open={props.open} onClose={props.onClose}>
        <div id="BackgroundPopup" className="popup-container">
            <form onSubmit={(event) => {props.onSubmit(event)}}> 
                <label form="bg-url">Enter URL: </label>
                <input type="text" id="bg-url" name="url" required/>
                <input type="submit" value={"✔"}/>
            </form>
        </div>
    </Popup>
}

export default function BackgroundComponent ({url}: {url?: string}) { 
    const [bgImage, setBgImage] = useState<string>("/assets/default_bg.jpg");
    const {isOpen, setIsOpen} = useContext(BgPopUpContext);
    const [backgroundValue, setBackground] = useCookies("background");

    useEffect(() => {
        if (typeof url === "string") {
            setBgImage(url);
        }
    }, [url]);

    const updateBackground = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const url = (event.currentTarget.elements.namedItem("url") as HTMLInputElement).value;
        setBackground(url);
        return location.reload();
    }

    return (
        <div id="BackgroundComponents"> 
            <BackgroundPopupComponent open={isOpen} onClose={() => {setIsOpen(!isOpen)}} onSubmit={(event: FormEvent<HTMLFormElement>) => {updateBackground(event)}} />

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
