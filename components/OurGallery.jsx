export default function OurGallery() {
    return (
        <div className="carousel carousel-center w-full p-4 space-x-4 bg-white rounded-box mx-20">
            <div className="carousel-item">
                <img
                    src="/team1.jpeg"
                    className="rounded-box md:w-72 md:h-100 w-56 h-72"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="/team2.jpeg"
                    className="rounded-box md:w-72 md:h-100 w-56 h-72"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="/team3.jpeg"
                    className="rounded-box md:w-72 md:h-100 w-56 h-72"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="/team1.jpeg"
                    className="rounded-box md:w-72 md:h-100 w-56 h-72"
                />
            </div>
            <div className="carousel-item">
                <img src="/team2.jpeg" className="rounded-box w-72 h-100" />
            </div>
            {/* <div className="carousel-item">
                <img src="/director.png" className="rounded-box w-72 h-100" />
            </div>
            <div className="carousel-item">
                <img src="cofounder.jpeg" className="rounded-box w-72 h-fit" />
            </div> */}
        </div>
    );
}
