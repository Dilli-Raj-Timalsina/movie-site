import NavBar from "@/components/NavBar";
export default function Home() {
    return (
        <div className="w-screen h-full bg-slate-50">
            <img
                src="/rectangle.png"
                alt=""
                className="w-screen h-24 md:h-28 relative z-0 bg-sky-950"
            />
            <NavBar></NavBar>
            <ImageDescription></ImageDescription>
            <h1 className="text-3xl text-pink-600 font-semibold mt-10 mb-8 text-center">
                Related Videos{" "}
            </h1>
            <div class="grid md:grid-cols-2 items-center justify-center grid-cols-1 gap-y-6  md:gap-y-2 px-20 py-10 ">
                <VideoFrame></VideoFrame>
            </div>
        </div>
    );
}

function VideoFrame() {
    return (
        <iframe
            src={`https://www.youtube.com/embed/vScEyLopvXE`}
            title="YouTube Video"
            className=""
            height={400}
            width={680}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}

function ImageDescription() {
    return (
        <div className="container mb-24 mt-16 mx-auto md:px-6">
            <section className="mb-32 text-center md:text-left">
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="flex flex-wrap items-center">
                        <div className="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
                            <img
                                src="/ourmoviephoto.jpg"
                                alt="Trendy Pants and Shoes"
                                className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
                            />
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12">
                            <div className="px-6 py-12 md:px-12">
                                <h2 className="mb-6 text-3xl font-bold">
                                    Woodlang upcoming Movie Coming Soon January .
                                </h2>
                                <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                                    In the enchanting town of Misty Pines, nestled deep
                                    within the rolling hills of the countryside, a
                                    mysterious secret lies buried beneath its serene
                                    facade. "Whispers in the Wind" tells the captivating
                                    story of Sarah, a young woman who inherits her
                                    grandmother's quaint cottage on the outskirts of town.
                                    As she delves into her family's past, Sarah uncovers a
                                    hidden diary that reveals long-forgotten tales of
                                    love, betrayal, and redemption. With each turn of the
                                    page, Sarah becomes entwined in the lives of her
                                    ancestors, transported back to a time when forbidden
                                    romances and unspeakable tragedies shaped the destiny
                                    of generations. Guided by the whispers of the wind,
                                    Sarah embarks on a journey of self-discovery,
                                    unraveling the mysteries of the past while forging
                                    unexpected connections in the present.
                                </p>
                                <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                                    In the enchanting town of Misty Pines, nestled deep
                                    within the rolling hills of the countryside, a
                                    mysterious secret lies buried beneath its serene
                                    facade. "Whispers in the Wind" tells the captivating
                                    story of Sarah, a young woman who inherits her
                                    grandmother's quaint cottage on the outskirts of town.
                                    As she delves into her family's past, Sarah uncovers a
                                    hidden diary that reveals long-forgotten tales of
                                    love, betrayal, and redemption. With each turn of the
                                    page, Sarah becomes entwined in the lives of her
                                    ancestors, transported back to a time when forbidden
                                    romances and unspeakable tragedies shaped the destiny
                                    of generations. Guided by the whispers of the wind,
                                    Sarah embarks on a journey of self-discovery,
                                    unraveling the mysteries of the past while forging
                                    unexpected connections in the present.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="bg-white py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Movie Release Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-gray-200 rounded-lg p-6">
                                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                                    Title
                                </h3>
                                <p className="text-gray-600">Woodlang</p>
                                <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
                                    Release Date
                                </h3>
                                <p className="text-gray-600">February 15, 2024</p>
                                <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
                                    Duration
                                </h3>
                                <p className="text-gray-600">2 hours 15 minutes</p>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-6">
                                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                                    Actors
                                </h3>
                                <ul className="text-gray-600">
                                    <li>John Doe</li>
                                    <li>Jane Smith</li>
                                    <li>Michael Johnson</li>
                                    {/* Add more actors as needed */}
                                </ul>
                                <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
                                    Contact Details
                                </h3>
                                <p className="text-gray-600">
                                    Mail : contact@premisvision.co.uk
                                </p>
                                <p className="text-gray-600">Phone: 07462295395</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}
