// Event Listener for the before unload warning 

import { useState } from "react";
import { useBeforeUnload } from "react-use";

export default function onUnload() {
    let [isToggled, setIsToggled] = useState<boolean>(true);

    useBeforeUnload(isToggled, "Teachers bagging u again?");

    return setIsToggled;
}
