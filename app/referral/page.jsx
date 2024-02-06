import NavBar from "@/components/NavBar";
export default function Referral() {
    return (
        <div className="w-screen h-full bg-slate-50">
            <img
                src="/rectangle.png"
                alt=""
                className="w-screen h-24 md:h-28 relative z-0 bg-sky-950"
            />
            <NavBar></NavBar>

            <form
                action=""
                method="post"
                className="md:m-36  my-16 md:my-16 md:w-4/5 w-screen  md:py-10 px-2 py-8 rounded-lg h-full border border-slate-300 bg-slate-100 flex items-center flex-col"
            >
                <img
                    src="https://www.hyperce.io/_next/static/media/demo.1593d4dc.svg"
                    alt=""
                    className="w-2/3 h-fit"
                />
                <h1 className="text-gray-900 font-bold text-4xl mt-10">
                    Join as a Referral Partner
                </h1>
                <div className="mt-10">
                    <h1 className="text-lg text-gray-600 font-medium my-4">
                        your details
                    </h1>
                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full  px-7 py-3 outline-none  rounded-sm border border-gray-200 hover:shadow-lg"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full  px-7 py-3 outline-none  rounded-sm border border-gray-200 hover:shadow-lg"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-7 py-3 outline-none rounded-sm border border-gray-200 hover:shadow-lg"
                            placeholder="Email Address"
                        />
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-7 py-3 outline-none rounded-sm border border-gray-200 hover:shadow-lg"
                            placeholder="Your Phone"
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="text-lg text-gray-600 font-medium my-4">
                        Referee details
                    </h1>
                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            id="refereFirstName"
                            name="refereSecondName"
                            required
                            className="w-full  px-7 py-3 outline-none  rounded-sm border border-gray-200 hover:shadow-lg"
                            placeholder="First Name(Referee)"
                        />
                        <input
                            type="text"
                            id="refereeLastName"
                            name="refereeLastName"
                            required
                            className="w-full  px-7 py-3 outline-none  rounded-sm border border-gray-200 hover:shadow-lg"
                            placeholder="Last Name(Referee)"
                        />
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                        <input
                            type="email"
                            id="refereeEmail"
                            name="refereeEmail"
                            required
                            className="w-full px-7 py-3 outline-none rounded-sm border border-gray-200 hover:shadow-lg"
                            placeholder="Email Address(Refree)"
                        />
                        <input
                            type="number"
                            id="refereePhone"
                            name="refereePhone"
                            required
                            className="w-full px-7 py-3 outline-none rounded-sm border border-gray-200 hover:shadow-lg"
                            placeholder="Your Phone(Referee)"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="px-8 rounded-sm py-2 text-white text-lg font-medium bg-blue-500 text-center mt-10 "
                >
                    Join Us
                </button>
            </form>
        </div>
    );
}

// https://www.hyperce.io/_next/static/media/demo.1593d4dc.svg
