export default function Team() {
    return (
        <>
            <div className="carousel carousel-center w-full p-4 space-x-4 bg-white rounded-box  md:hidden flex ">
                <div className="carousel-item ">
                    <ImageBox
                        imgurl={"/director.png"}
                        name="Prem Lama"
                        position="Director"
                    ></ImageBox>
                </div>
                <div className="carousel-item">
                    <ImageBox
                        imgurl={"/cofounder.jpeg"}
                        name="Dawa Syangbo"
                        position="Co-Founder"
                    ></ImageBox>
                </div>
                <div className="carousel-item">
                    <ImageBox
                        imgurl={"/team6.jpeg"}
                        name="Karam Gurung"
                        position="Producer"
                    ></ImageBox>
                </div>
                <div className="carousel-item">
                    <ImageBox
                        imgurl={"/team5.jpeg"}
                        name="Purna Pakhrin "
                        position="Producer"
                    ></ImageBox>
                </div>
            </div>
            <div className="grid grid-cols-4  h-fit  md:gap-x-10 gap-y-4 md:px-24 md:py-20  px-2 py-10 bg-gray-800  gap-x-5 hidden md:flex ">
                <ImageBox
                    imgurl={"/director.png"}
                    name="Prem Lama"
                    position="Director"
                ></ImageBox>
                <ImageBox
                    imgurl={"/cofounder.jpeg"}
                    name="Dawa Syangbo"
                    position="Co-Founder"
                ></ImageBox>
                <ImageBox
                    imgurl={"/team6.jpeg"}
                    name="Karam Gurung"
                    position="Producer"
                ></ImageBox>
                <ImageBox
                    imgurl={"/team5.jpeg"}
                    name="Purna Pakhrin "
                    position="Producer"
                ></ImageBox>
            </div>
        </>
    );
}

function ImageBox({ imgurl, name, position }) {
    return (
        <div className="text-start ">
            <img src={`${imgurl}`} alt="" className="md:w-72 md:h-96 w-56 h-80" />
            <h1 className="text-white text-xs md:text-4xl font-bold mt-6 text-nowrap	">
                {name}
            </h1>
            <h2 className="md:text-base text-white font-semibold text-xs text-nowrap	">
                {position}
            </h2>
        </div>
    );
}
