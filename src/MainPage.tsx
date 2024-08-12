import Navbar from "./Navbar"

export default function MainPage() {




    return (
        <main className="h-full w-full flex flex-col-reverse md:flex-row">
            <Navbar />
            <section id="timeline" className="w-full max-w-[630px] h-full">
                <div id="stories"></div>
                <div id="posts"></div>
            </section>
            <section id="recommendedFollowings" className="md:hidden w-[287px] mx-4"></section>


        </main>
    )
}