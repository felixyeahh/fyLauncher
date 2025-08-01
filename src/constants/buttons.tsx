
export type ButtonEntry = {
    title: string,
    desc: string,
    url: string | undefined,
    type: "link" | "script",
    onClick: onClick
}

export type onClick = "setBackground" | undefined;
