export default function OurClients() {
    return (
        <div className="flex flex-col md:pb-20 pb-10  bg-white">
            <h1 className="text-3xl text-gray-900 font-bold md:py-14 py-7 text-center">
                Our Clients
            </h1>
            <div className="flex justify-around items-center ">
                <img src="/mainlogo.png" alt="" className="w-32 h-fit" />
                <img
                    src="https://nextjssite-mu.vercel.app/logo.webp"
                    alt=""
                    className="w-28 h-fit"
                />
                <img src="/logo3.svg" alt="" className="w-28  h-fit" />
            </div>
        </div>
    );
}
