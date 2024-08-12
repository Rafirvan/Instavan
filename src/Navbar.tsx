import { Instagram, House, Search, Compass, Film, Send, Heart, CirclePlus, User, Layers } from "lucide-react"
import NavbarOthersMenu from "./NavbarOthersMenu"
import { useAtom } from "jotai"
import { OthersMenuOpen } from "./atoms"



export default function Navbar() {

    const [, setIsOthersMenuOpen] = useAtom(OthersMenuOpen)

    return (
        <div>
            <nav id="TopNavbarSmallScreen" className="fixed border-b w-full top-0 h-[60px] border-zinc-600 flex sm:hidden px-3">
                <a id="topIGIcon" href="" className=" h-full w-fit text-white rounded-md   flex items-center "><Instagram /></a>

                <div id="searchbar" className=" flex items-center ml-12 w-64"><input type="text" className="h-9 rounded-md bg-zinc-700 focus:border-transparent focus:outline-none w-full py-[3px] px-4 text-white font-thin" placeholder="Cari" /></div>

                <div id="topOthersButton" className="ml-auto h-full" >
                    <button id="otherNavigationLinks" className="flex items-center h-full w-full text-white  mx-1  cursor-pointer rounded-lg active:opacity-40 select-none" onClick={(e) => { e.stopPropagation(); setIsOthersMenuOpen(prev => !prev) }} >
                        <Layers />
                        <h3 className="ml-4 hidden lg:inline ">Lainnya</h3>
                    </button>
                </div>
                <NavbarOthersMenu />
            </nav>
            <nav id="mainNavbarOrBottomNavbarSmallScreen" className="text-white fixed lg:w-[244px] sm:w-[72px] sm:h-[100dvh]  sm:border-r sm:border-t-0 border-t w-full bottom-0 h-12 border-zinc-600 flex sm:flex-col flex-row justify-between  py-2 px-3">
                <a href="" className="h-[73px] w-full text-white mb-[19px] py-5 px-4 hidden sm:inline"><Instagram className="hidden sm:inline lg:hidden" /><h1 className="text-white text-3xl text-center hidden lg:inline" style={{ fontFamily: "Fontspring" }} >Instavan</h1></a>

                <ul id="mainNavigationLinks" className="flex sm:flex-col justify-between w-full items-center" >
                    <li className="p-3 m-1 flex justify-center sm:justify-start cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none  h-12 w-full"><House /><h3 className="ml-4 hidden lg:inline ">Beranda</h3></li>
                    <li className="p-3 m-1 sm:flex hidden justify-center sm:justify-start cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none  h-12 w-full  "><Search /><h3 className="ml-4 hidden lg:inline">Cari</h3></li>
                    <li className="p-3 m-1 flex justify-center sm:justify-start cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none  h-12 w-full"><Compass /><h3 className="ml-4 hidden lg:inline">Jelajahi</h3></li>
                    <li className="p-3 m-1 flex justify-center sm:justify-start cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none  h-12 w-full"><Film /><h3 className="ml-4 hidden lg:inline">Reels</h3></li>
                    <li className="p-3 m-1 flex justify-center sm:justify-start cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none  h-12 w-full"><Send /><h3 className="ml-4 hidden lg:inline">Pesan</h3></li>
                    <li className="p-3 m-1 flex justify-center sm:justify-start cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none  h-12 w-full"><Heart /><h3 className="ml-4 hidden lg:inline">Notifikasi</h3></li>
                    <li className="p-3 m-1 flex justify-center sm:justify-start cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none  h-12 w-full"><CirclePlus /><h3 className="ml-4 hidden lg:inline">Buat</h3></li>
                    <li className="p-3 m-1 flex justify-center sm:justify-start cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none  h-12 w-full"><User /><h3 className="ml-4 hidden lg:inline">Profil</h3></li>
                </ul>

                <div className="mt-auto mb-20 hidden sm:inline" >
                    <button id="otherNavigationLinks" className="h-12 w-full text-white p-3 mx-1 flex cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none" onClick={(e) => { e.stopPropagation(); setIsOthersMenuOpen(prev => !prev) }} >
                        <Layers />
                        <h3 className="ml-4 hidden lg:inline ">Lainnya</h3>
                    </button>
                </div>
                <NavbarOthersMenu />

            </nav>
        </div>
    )
}