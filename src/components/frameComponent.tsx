
export default function FrameOpenComponent ({url} : {url: string | null}) {
    if (url === null) { throw Error ("No url provided for the iframe"); }

    return <div id="iFrame Render">
        <iframe src={url} allowFullScreen={true} width={"100%"} height={"100%"} title="FrameBox"> </iframe>
    </div>
}
