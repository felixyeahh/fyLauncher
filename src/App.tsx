import { useEffect, useState} from "react";
import ButtonComponent from "./components/buttonComponent";
import { useCookies } from "./components/cookieManager";
import BackgroundComponent from "./components/backgroundManager";
import { BgPopUpContext, FrameOpenContext } from "./components/context";
import OnUnloadComponent from "./components/onUnload";
import "./styles/index.css";
import "./styles/App.css";
import FrameOpenComponent from "./components/frameComponent";

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
    const [isFrameOpen, setIsFrameOpen] = useState(false);
    const [activeUrl, setActiveUrl] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <OnUnloadComponent/>
            {
                isFrameOpen == false ? ( <>
                    <MakeTitle/>
                    <BgPopUpContext.Provider value={{isOpen, setIsOpen}}>
                        <FrameOpenContext.Provider value={{isFrameOpen, setIsFrameOpen, activeUrl, setActiveUrl}}>
                            <ButtonComponent/>
                        </FrameOpenContext.Provider>
                        <MakeBackground/>
                    </BgPopUpContext.Provider>
            </>) : (<>
                <FrameOpenContext.Provider value={{isFrameOpen, setIsFrameOpen, activeUrl, setActiveUrl}}>
                    <FrameOpenComponent url={activeUrl}/>
                </FrameOpenContext.Provider>
            </>)
            }
        </div>
    );
}

export default App;
