import { Settings, Activity, Bookmark, Moon, Sun, OctagonAlert } from "lucide-react";

import { useEffect, useRef } from "react";
import { OthersMenuOpen, DarkMode } from "./atoms";
import { useAtom } from "jotai";


export default function NavbarOthersMenu() {

    const othersMenuRef = useRef<HTMLUListElement>(null);
    const [isDarkMode, setIsDarkMode] = useAtom(DarkMode)
    const [isOthersMenuOpen, setIsOthersMenuOpen] = useAtom(OthersMenuOpen)

    const handleCloseOthersMenu = (event: MouseEvent | UIEvent) => {
        if (othersMenuRef.current && !othersMenuRef.current.contains(event.target as Node)) {
            setIsOthersMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleCloseOthersMenu);

        return () => {
            document.removeEventListener('click', handleCloseOthersMenu);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {

        if (isOthersMenuOpen) {
            window.addEventListener('resize', () => setIsOthersMenuOpen(false));
        }
        return () => {
            window.removeEventListener('resize', () => setIsOthersMenuOpen(false));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOthersMenuOpen])


    return (
        <ul className={`text-white py-2 absolute h-fit w-[266px] z-10 rounded-2xl bg-zinc-800 sm:bottom-36 sm:left-5 sm:right-auto sm:top-auto top-10 right-3 ${!isOthersMenuOpen && "hidden"}`} ref={othersMenuRef} >
            <li className="p-3 mx-1 flex cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none box-border h-12 w-90%"><Settings /><h3 className="ml-4 ">Pengaturan</h3></li>
            <li className="p-3 mx-1 flex cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none box-border h-12 w-90%"><Activity /><h3 className="ml-4 ">Aktivitas Anda</h3></li>
            <li className="p-3 mx-1 flex cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none box-border h-12 w-90%"><Bookmark /><h3 className="ml-4 ">Tersimpan</h3></li>
            <li className="p-3 mx-1 flex cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none box-border h-12 w-90%" onClick={() => setIsDarkMode(prev => !prev)}>{isDarkMode ? <Moon /> : <Sun />}<h3 className="ml-4 ">Ubah Tampilan</h3></li>
            <li className="p-3 mx-1 flex cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none box-border h-12 w-90%"><OctagonAlert /><h3 className="ml-4 ">Laporkan Masalah</h3></li>
            <hr className="border-2 border-zinc-700 h-full my-2" />
            <li className="text-red-500 p-3 mx-1 mt-3 flex cursor-pointer rounded-lg hover:bg-zinc-900 active:opacity-40 select-none box-border h-12 w-90%"><h3 className="ml-4 ">Keluar</h3></li>
        </ul>
    )

}