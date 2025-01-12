import { cn } from "@/lib/utils";
import { CalendarDaysIcon, LucideIcon, MoreVerticalIcon } from "lucide-react";

interface CourseInfoProps {
    course: {
        title: string,
        teacher: string,
        location: string,
        time: string,
        progress: number,
        icon: LucideIcon,
        color: string,
    }
}

const CourseInfo = ({
    course
}: CourseInfoProps) => {
    return(
        <div className="w-full h-96 bg-white rounded-md flex flex-col">
            {/* Main info */}
            <div className="flex pt-6 pl-6 gap-4 justify-start items-center">
                <div className="w-14 h-14 flex justify-center items-center">
                    <course.icon className={cn("p-2 w-full h-full rounded-md",
                        course.color && `text-${course.color}-400 bg-${course.color}-100`
                    )}/>
                </div>
                <div className="flex flex-col gap-1 justify-start items-start">
                    <h2 className="text-lg font-semibold">
                        {course.title}
                    </h2>
                    <div className="flex gap-2 text-muted-foreground text-sm font-semibold">
                        <CalendarDaysIcon className="w-5 h-5" />
                        {course.time}
                    </div>
                </div>
                <MoreVerticalIcon className="w-6 h-6 ml-auto mr-8" strokeWidth={1.25}/>
            </div>
            <div className="w-full flex justify-center items-end gap-12 relative pt-4">
                <div className="w-max relative">
                    <div className={cn("text-sm font-semibold mb-1",
                        course.color && `text-${course.color}-400`
                    )}>
                        General
                    </div>

                    <div className={cn("w-full h-1.5 rounded-t-nonemd absolute bottom-0",
                        course.color && `bg-${course.color}-100`
                    )}>
                    </div>
                </div>
                <div className="w-max relative">
                    <div className={cn("text-sm font-semibold mb-1 text-muted-foreground",
                        !course.color &&`text-${course.color}-400`
                    )}>
                        Attendence
                    </div>

                    <div className={cn("w-full h-1.5 rounded-t-nonemd absolute bottom-0",
                        !course.color && `bg-${course.color}-100`
                    )}>
                    </div>
                </div>
                <div className="w-max relative">
                    <div className={cn("text-sm font-semibold mb-1 text-muted-foreground",
                        !course.color &&`text-${course.color}-400`
                    )}>
                        Badges
                    </div>

                    <div className={cn("w-full h-1.5 rounded-t-nonemd absolute bottom-0",
                        !course.color && `bg-${course.color}-100`
                    )}>
                    </div>
                </div>
                <div className="w-max relative">
                    <div className={cn("text-sm font-semibold mb-1 text-muted-foreground",
                        !course.color &&`text-${course.color}-400`
                    )}>
                        Participants
                    </div>

                    <div className={cn("w-full h-1.5 rounded-t-nonemd absolute bottom-0",
                        !course.color && `bg-${course.color}-100`
                    )}>
                    </div>
                </div>

                <div className="w-full h-0.5 bg-[#f5f5f5] absolute bottom-0">
                </div>
            </div>
            
            <div className="w-full h-full flex justify-center items-center font-bold text-2xl">
                Am sory but I only had 2 days :(
            </div>
        </div>
    );
}

export default CourseInfo;