import Link from "next/link";

const UpcomingMoviesSection = () => {
    return (
        <div className="container mb-24 mt-16 mx-auto md:px-6">
            {/* <!-- Section: Design Block --> */}
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
                                <Link
                                    type="button"
                                    className="btn btn-active btn-neutral"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    href={"/movie"}
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}
        </div>
    );
};

export default UpcomingMoviesSection;
