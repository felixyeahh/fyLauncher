import { useEffect, useState, useContext } from "react";
import "../styles/index.css";
import type { ButtonEntry } from "../constants/buttons";
import useScriptClickHandler from "./clickHandler";
import { BgPopUpContext, FrameOpenContext } from "./context";
import useLinkButtonHandler from "./linkButtonHandler";

export default function ButtonComponent() {
    const [buttons, setButtons] = useState<ButtonEntry[]>([]);

    useEffect(() => {
        fetch('/data/buttons.json')
            .then(res => res.json())
            .then(data => setButtons(data.buttons))
            //.catch(err => {throw Error('Error loading buttons:', err)});
    }, []);

    const _bgPopupContext = useContext(BgPopUpContext);
    const _frameContext = useContext(FrameOpenContext);

    const HandleClick = (button: ButtonEntry) => {
        switch (button.type) {
            case ("link"):
                return useLinkButtonHandler(button, _frameContext)();
            case ("script"):
                return useScriptClickHandler(button, _bgPopupContext)();
            default:
                throw Error("Unsupported Button Type");
        }
    }

    return (
        <div id="buttons" className="button-container">
            {
                buttons.map((btn, index) => (
                    <button key={"btn" + index} className="cybr-btn" onClick={() => HandleClick(btn)}>
                        {btn.title} <span aria-hidden>_</span>
                        <span aria-hidden className="cybr-btn__glitch">{btn.desc}</span>
                        <span aria-hidden className="cybr-btn__tag"></span>
                    </button>
                ))
            }
        </div>
    )
}
