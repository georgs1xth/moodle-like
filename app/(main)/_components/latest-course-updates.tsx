import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BookOpenTextIcon, CalendarDaysIcon, ChevronRightIcon, LaptopIcon, MapPinIcon, UserIcon } from "lucide-react";
import Link from "next/link";

const LatestCourseUpdates = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="w-full flex justify-between items-center px-12">
                <h2 className="text-xl font-semibold">
                    Latest Course Updates
                </h2>
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
                            <CarouselItem className="basis-1/3 pl-8" key={i}>
                                <div className="w-full flex flex-col gap-2 pt-3 pl-4 pb-2 pr-4 bg-white rounded-lg">
                                    <div className="flex flex-col gap-0">
                                        <h3 className="font-semibold text-base">Methodology for scientific reasearch</h3>
                                        <p className="text-muted-foreground text-xs">Semester 7</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="bg-[#005aa0] font-semibold text-card text-xs w-max px-4 py-[3px] rounded-md">
                                            Latest updates
                                        </div>
                                        <p className="text-xs text-[#005aa0] font-semibold">
                                            30 min ago
                                        </p>
                                    </div>
                                    <div className="flex flex-col overflow-y-auto h-30 gap-3">
                                        <div className="flex flex-col gap-2 pl-2 pr-4">
                                            <h4 className="text-xs font-semibold overflow-ellipsis overflow-hidden whitespace-nowrap">
                                                Using BSI technology for controlling a mobile app using brain signals.
                                            </h4>
                                            <div className="flex gap-2 justify-start items-center">
                                                <BookOpenTextIcon className="w-6 h-6 text-[#005aa0]"/>
                                                <Link href="/courses" className="text-xs text-[#005aa0] underline font-semibold">
                                                    Lecture 6
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 pl-2 pr-4">
                                            <h4 className="text-xs font-semibold overflow-ellipsis overflow-hidden whitespace-nowrap">
                                                Using BSI technology for controlling a mobile app using brain signals.
                                            </h4>
                                            <div className="flex gap-2 justify-start items-center">
                                                <BookOpenTextIcon className="w-6 h-6 text-[#005aa0]"/>
                                                <Link href="/courses" className="text-xs text-[#005aa0] underline font-semibold">
                                                    Lecture 6
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href={'/courses'} className="flex items-center justify-center text-xs font-semibold underline text-muted-foreground">
                                        View course <ChevronRightIcon className="w-4 h-4"/>
                                    </Link>
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

export default LatestCourseUpdates;