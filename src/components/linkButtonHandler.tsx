import type { ButtonEntry } from "src/constants/buttons";
import type { FrameOpenContextType } from "./context";

export default function useLinkButtonHandler(button: ButtonEntry, context: FrameOpenContextType) {
    return () => {
        if (button.url === undefined) { throw Error("Button doesn't have a URL to redirect to") };

        context.setActiveUrl(button.url);
        context.setIsFrameOpen(true);
    };
}
