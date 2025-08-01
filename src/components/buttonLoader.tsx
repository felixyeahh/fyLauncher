import { useEffect, useState } from "react";
import "../styles/index.css";
import type { ButtonEntry } from "../constants/buttons";
import { OnClickHandler } from "./clickHandler";

export default function ButtonLoader() {
    const [buttons, setButtons] = useState<ButtonEntry[]>([]);

    useEffect(() => {
        fetch('/data/buttons.json')
            .then(res => res.json())
            .then(data => setButtons(data.buttons))
            //.catch(err => {throw Error('Error loading buttons:', err)});
    }, []);

    return (
        <div id="buttons" className="button-container">
            {
                buttons.map((btn, index) => (
                    <button className="cybr-btn" onClick={() => OnClickHandler(btn)}>
                        {btn.title} <span aria-hidden>_</span>
                        <span aria-hidden className="cybr-btn__glitch">{btn.desc}</span>
                        <span aria-hidden className="cybr-btn__tag"></span>
                    </button>
                ))
            }
        </div>
    )
}
