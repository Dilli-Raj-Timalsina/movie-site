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
        </div>
    );
}
