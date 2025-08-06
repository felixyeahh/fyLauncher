// Event Listener for the before unload warning 

import { useState } from "react";
import { useBeforeUnload } from "react-use";

export default function OnUnloadComponent() {
    useBeforeUnload(true, "Teachers bagging u again?");

    return (<div></div>);
}
