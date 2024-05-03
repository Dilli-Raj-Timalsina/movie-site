export default function HomePageMovie() {
    return (
        <div className="w-screen h-fit bg-slate-50">
            <div className="grid md:grid-cols-2 items-center justify-center grid-cols- gap-y-6  md:gap-y-2 md:px-20 px-2  py-10 ">
                <VideoFrame className={" w-full h-80 md:w-5/6 md:h-96"}></VideoFrame>
                <VideoFrame
                    className={" w-full h-80 md:w-5/6 md:h-96 hidden md:flex"}
                ></VideoFrame>
            </div>
        </div>
    );
}

export function VideoFrame({ className }) {
    return (
        <iframe
            src={`https://www.youtube.com/embed/vScEyLopvXE`}
            title="YouTube Video"
            className={className}
            height={400}
            width={680}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}
