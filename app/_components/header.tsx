import { Input } from "@/components/ui/input";
import { BellDotIcon, MessageSquareMoreIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
    return(
        <div className="grid grid-cols-2 w-full h-16 rounded-b-md bg-white px-6">
            {/* Search */}
            <div className="col-span-1 flex justify-start items-center relative">
                <SearchIcon className="h-6 w-6 absolute left-2 text-slate-400" strokeWidth={1}/>
                <Input className="pl-10 border-none placeholder-slate-400" placeholder="Search courses and your tasks"/>
            </div>

            <div className="col-span-1 flex gap-3 justify-end items-center">
                <Link href="/" className="p-2 w-10 h-10 hover:bg-slate-300 rounded-md transition-all">
                    <BellDotIcon strokeWidth={1.5} className="w-6 h-6 aspect-square"/>
                </Link>
                <Link href="/" className="p-2 w-10 h-10 hover:bg-slate-300 rounded-md transition-all">
                    <MessageSquareMoreIcon strokeWidth={1.5} className="w-6 h-6 aspect-square"/>
                </Link>
                
                {/* <div className="">
                    TODO: Add user profile
                </div> */}
            </div>

        </div>
    );
}

export default Header;