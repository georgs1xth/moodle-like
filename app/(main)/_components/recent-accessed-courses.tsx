import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CalendarDaysIcon, ChevronRightIcon, LaptopIcon, MapPinIcon, UserIcon } from "lucide-react";
import Link from "next/link";

const RecentAccessedCourses = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="w-full flex justify-between items-center px-12">
                <h2 className="text-xl font-semibold">
                    Recent Accessed Courses
                </h2>
                <Link href='/courses' className="flex items-center">
                    View all <ChevronRightIcon className="w-6 h-6" strokeWidth={1}/>
                </Link>
            </div>
            <div className="w-full">
                <Carousel
                    opts={{
                        align: 'start',
                    }}
                    className="w-full h-max relative px-12"
                >
                    <CarouselContent className="">
                        {new Array(5).fill(0).map((_, i) => {
                            return(
                            <CarouselItem className="basis-1/3 pl-8 " key={i}>
                                <div className="w-full flex flex-col gap-2 pt-4 pl-5 pb-0 pr-4 bg-white rounded-lg">
                                    <div className="w-full flex pl-2 justify-between items-center">
                                        <LaptopIcon className="w-10 h-10 text-emerald-400 p-2 bg-emerald-100 rounded-md"/>
                                        <div className="flex justify-end items-center gap-2 text-muted-foreground text-xs p-1.5 bg-[#f5f5f5] rounded-md">
                                            <CalendarDaysIcon className="w-4 h-4 "/>
                                            Monday 08:30
                                        </div>
                                    </div>
                                    <h3 className="text-base font-semibold">
                                        Course Title
                                    </h3>
                                    <div className="flex justify-start items-center gap-2 text-muted-foreground text-sm">
                                        <UserIcon className="w-5 h-5"/>
                                        dr. Fuffelschmeirz
                                    </div>
                                    <div className="flex justify-start items-center gap-2 text-muted-foreground text-sm">
                                        <MapPinIcon className="w-5 h-5"/>
                                        P1/312
                                    </div>
                                    <div className="w-full flex flex-col justify-center items-end text-xs text-muted-foreground relative bottom-2">
                                        Progress
                                        <div className="w-full h-2 bg-[#f5f5f5] rounded-md">
                                            <div className="w-2/3 h-full bg-emerald-400/70 rounded-md">

                                            </div>
                                        </div>
                                        <span className="text-foreground text-semibold">
                                            66%
                                        </span>
                                    </div>
                                </div>
                            </CarouselItem>
                            )
                        })
                        }
                    </CarouselContent>
                    <CarouselPrevious variant={"ghost"} className="[&_svg]:size-8 text-muted-foreground absolute w-12 h-12 left-0 top-1/2"/>
                    <CarouselNext variant={"ghost"} className="[&_svg]:size-8 text-muted-foreground absolute right-0 top-1/2"/>
                </Carousel>
            </div>
        </div>
    )
}

export default RecentAccessedCourses;