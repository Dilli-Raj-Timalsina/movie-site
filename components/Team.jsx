export default function Team() {
    return (
        <div className="grid grid-cols-3  h-fit  md:gap-x-10 gap-y-4 md:px-24 md:py-20  px-10 py-10 bg-gray-800  ">
            <ImageBox></ImageBox>
            <ImageBox></ImageBox>
            <ImageBox></ImageBox>
        </div>
    );
}

function ImageBox() {
    return (
        <div className="text-start grayscale hover:grayscale-0">
            <img
                src="	https://nepalfilmproduction.com/wp-content/uploads/2023/03/digbijaya.png"
                alt=""
                className=""
            />
            <h1 className="text-white text-lg md:text-4xl font-bold mt-6">
                Maanish Paul
            </h1>
            <h2 className="md:text-base text-white font-semibold text-xs">CTO</h2>
        </div>
    );
}
