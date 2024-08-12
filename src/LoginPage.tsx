/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react"
import screenshotBase from "./assets/login base iphone.png"
import screenshot1 from "./assets/screenshot1.png"
import screenshot2 from "./assets/screenshot2.png"
import screenshot3 from "./assets/screenshot3.png"
import screenshot4 from "./assets/screenshot4.png"
import { Facebook } from "lucide-react"
import googleplayapp from "./assets/googleplayapp.png"
import microsoftapp from "./assets/microsoft app.png"

export default function LoginPage() {
    const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0)

    const screenshots = [screenshot1, screenshot2, screenshot3, screenshot4]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScreenshotIndex(prevIndex => (prevIndex + 1) % screenshots.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [screenshots.length]);


    return <div className="h-screen w-full max-w-[935px] md:mx-auto overflow-hidden">
        <main className="flex justify-center">
            <article className="w-[935px] h-[600px] overflow-hidden relative mt-8 flex justify-center gap-8">
                <section id="LoginScreenshots" className=" hidden lg:flex h-full w-[380px] rounded-[1px]">
                    <img src={screenshotBase} alt="" className="absolute overflow-hidden active object-cover" />
                    {screenshots.map((screenshot, index) => (
                        <img
                            key={index}
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                            className={`absolute left-[195px] top-[28px] ${index === currentScreenshotIndex ? 'active' : ''}`}

                        />
                    ))}
                </section>
                <section id="LoginForm" className="flex flex-col flex-1 gap-y-3 max-w-[350px] z-10 pt-2 pb-4">
                    <div id="MainForm" className="basis-[70.18%] sm:border-white sm:border pt-10 px-10 flex-col flex rounded-[1px]">
                        <h1 className="text-white text-5xl text-center mb-10" style={{ fontFamily: "Fontspring" }} >Instavan</h1>
                        <form onSubmit={(e) => { window.alert("hello"); e.preventDefault() }} className="flex items-center justify-center flex-col gap-2 ">
                            <input type="text" placeholder="username" className="w-full h-9 rounded-[2px] pl-2" />
                            <input type="password" placeholder="password" className="w-full h-9 rounded-[2px] pl-2" />
                            <input type="submit" className="w-full h-9 pt-1 place-self-start text-white pb-6 bg-blue-600 rounded-[6px] mt-2 cursor-pointer" value="sign-in" />
                        </form>
                        <div id="orline" className="flex w-full h-9 mt-4">
                            <hr className="text-gray-400 w-full place-self-center h-3 border-t-2" />
                            <div className="text-gray-400 text-md mx-3">OR</div>
                            <hr className="text-gray-400 w-full place-self-center h-3 border-t-2" />
                        </div>

                        <button id="FacebookLoginButton" className="border-0 text-blue-300 h-10 font-semibold" onClick={() => window.alert("feature coming soon")}><Facebook className="text-xl inline" />Log in with Facebook</button>

                        <button id="ForgetPasswordButton" className="border-0 text-blue-300 h-5 text-xs" onClick={() => window.alert("feature coming soon")}>Forgot password?</button>

                    </div>
                    <div id="RegisterBox" className="basis-[11.764%] sm:border-white sm:border flex text-white justify-center items-center rounded-[1px]">
                        <p>Don't have an account?
                            <span>
                                <a id="SignUpButton" className="border-0 text-blue-300 h-5 " onClick={() => window.alert("feature coming soon")}>  Sign Up</a>
                            </span>
                        </p>
                    </div>
                    <div id="GetApp" className="basis-[17.64%]  flex gap-3 flex-col justify-center items-center">
                        <p className="text-white">Get the app.</p>
                        <div className="flex gap-3">
                            <a href="https://play.google.com/store/games?hl=en" target="_blank" rel="noopener noreferrer">
                                <img src={googleplayapp} className="h-10" alt="" />
                            </a>
                            <a href="https://apps.microsoft.com/home?hl=en-us" target="_blank" rel="noopener noreferrer">
                                <img src={microsoftapp} className="h-10" alt="" />
                            </a>
                        </div>
                    </div>
                </section>
            </article>
        </main>
        <footer className="flex flex-col justify-center items-center mt-6 gap-3">
            <nav className="flex flex-wrap gap-3 justify-center items-center">
                <button className="border-0 hover:underline text-sm text-gray-400">About</button>
                <button className="border-0 hover:underline text-sm text-gray-400">Blog</button>
                <button className="border-0 hover:underline text-sm text-gray-400">Contact me</button>
            </nav>

            <p className="text-gray-400 text-sm">© 2023 Rafirvan</p>


        </footer>
    </div>


}