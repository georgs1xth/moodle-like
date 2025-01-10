"use client";

import { cn } from "@/lib/utils";
import { CalendarDaysIcon, CircleUserIcon, FilesIcon, GraduationCapIcon, LayoutDashboardIcon, MedalIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
    {
        icon: LayoutDashboardIcon,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: GraduationCapIcon,
        label: "Courses",
        href: "/courses"
    },
    {
        icon: CalendarDaysIcon,
        label: "Calendar",
        href: "/calendar",
    },
    {
        icon: FilesIcon,
        label: "Private files",
        href: "/files",
    },
    {
        icon: MedalIcon,
        label: "Grades",
        href: "/grades",
    }
];

const functions = [
    {
        icon: CircleUserIcon,
        label: "Profile",
        href: "/profile",
    },
    {
        icon: SettingsIcon,
        label: "Settings",
        href: "/settings",
    }
]

const Aside = () => {

    const pathname = usePathname()

    return(
        <div className="bg-white w-full h-full flex flex-col justify-start items-start gap-2.5 rounded-r-lg pl-2.5 pr-2 overflow-y-auto">
            <h1 className="flex justify-center items-center font-semibold text-2xl pr-2 py-4 w-full">
                SomeLogoooo
            </h1>
            {routes.map((route) => {
                return(
                    <Link key={route.label} href={route.href} className="flex justify-start items-center gap-6 py-2 pl-6 pr-10  w-full transition-all rounded-r-md relative group">
                        <div className={cn("absolute left-0 w-0.5 h-full rounded-r-md bg-transparent group-hover:bg-[#005aa0] transition-all",
                            pathname==route.href && "bg-[#005aa0]"
                        )}>
                        </div>
                        <route.icon className={cn("w-6 h-6 aspect-square group-hover:text-[#005aa0] transition-all",
                            pathname==route.href && "text-[#005aa0]"
                        )}/>
                        <h3 className={cn("text-base font-semibold group-hover:text-[#005aa0] transition-all", 
                            pathname==route.href && "text-[#005aa0]"
                        )}>
                            {route.label}
                        </h3>
                    </Link>
                )
            })}
            <div className="w-full mt-auto pb-4 flex flex-col justify-end gap-2.5 pt-4 ">
                <div className="w-full border-t-2 border-slate-100">

                </div>
                {functions.map((func) => {
                    return(
                        <Link key={func.label} href={func.href} className="flex justify-start items-center gap-6 py-2 pl-6 pr-10 w-full transition-all rounded-r-md relative group">
                            <div className={cn("absolute left-0 w-0.5 h-full rounded-r-md bg-transparent group-hover:bg-[#005aa0] transition-all",
                            pathname==func.href && "bg-[#005aa0]"
                        )}>
                        </div>
                        <func.icon className={cn("w-6 h-6 aspect-square group-hover:text-[#005aa0] transition-all",
                            pathname==func.href && "text-[#005aa0]"
                        )}/>
                        <h3 className={cn("text-base font-semibold group-hover:text-[#005aa0] transition-all", 
                            pathname==func.href && "text-[#005aa0]"
                        )}>
                            {func.label}
                        </h3>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default Aside;