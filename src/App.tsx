import { useState, type JSX } from "react";
import ButtonComponent from "./components/buttonComponent";
import { useCookies } from "./components/cookieManager";
import { BackgroundComponent } from "./components/backgroundManager";
import { BgPopUpContext } from "./components/context";
import onUnload from "./components/onUnload";
import "./styles/index.css";

/* function FrameTemplate (link: string): JSX.Element {
    return (
        <html>
            <head>
                <title>fyLauncher</title>
            </head>
            <body> 
                <script src='./src/scripts/onunload.js'></script>
                <iframe src='${link}' width={"100%"} height={"100%"} allowFullScreen={true} ></iframe>
            </body>
        </html>
    )
}

function AddButton(url: string, title: string, glitch: string | null = null, tag: string | null = "R%^$", iframe: boolean = true) {
    glitch = glitch == null ? (title).split("").reverse().join(""): glitch; // if glitch was not provided, make the glitch be reversed title
    const buttons = document.getElementById("buttons");
    console.log(url, "has been loaded");

    if (buttons == null) { throw Error("Buttons don't exist"); }

    buttons.innerHTML += MakeButton((`Move('${url}', ${iframe})`), title, glitch, tag);

    return true;
}

function Move (link: string, iframe: boolean = true) {
    // SetIsMoving();

    if (!iframe){
        return window.open(link, "_blank");
    }

    // return window.open("about:blank", "blank").document.body.innerHTML = (FrameTemplate(link));
}
*/

function MakeTitle() {
    return (
        <div id="title" className="title-container">
            <h1 className="text">fyLauncher</h1>
        </div>
    )
}

function MakeBackground () {
    const cookie = useCookies("background");

    if (typeof cookie[0] === "string") {
        return <BackgroundComponent url={cookie[0]}/>;
    }
    return <BackgroundComponent/>;
}

function App () {
    /* onUnload(); */

    const [isOpen, setIsOpen] = useState(false);

    return (
        <BgPopUpContext.Provider value={{isOpen, setIsOpen}}>
            <ButtonComponent/>
            <MakeTitle/>
            <MakeBackground/>
        </BgPopUpContext.Provider>
    );
}

export default App;
