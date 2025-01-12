import { cn } from "@/lib/utils";
import { CalendarDaysIcon, LaptopIcon, LucideIcon, LucideProps, MapPinIcon, UserIcon } from "lucide-react"

interface CourseCardProps {
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

const CourseCard = ({
    course
}: CourseCardProps) => {
    return(
        <div className="w-full flex flex-col gap-2 pt-4 pl-5 pb-0 pr-4 bg-white rounded-lg min-w-72 hover:scale-[1.02] hover:shadow-md transition-all cursor-pointer">
            <div className="w-full flex pl-2 justify-between items-center">
                <course.icon className={cn("w-10 h-10 p-2 rounded-md",
                    course.color && `text-${course.color}-400 bg-${course.color}-100`
                )}/>
                <div className="flex justify-end items-center gap-2 text-muted-foreground text-xs p-1.5 bg-[#f5f5f5] rounded-md">
                    <CalendarDaysIcon className="w-4 h-4 "/>
                    {course.time}
                </div>
            </div>
            <h3 className="text-base font-semibold line-clamp-1 overflow-ellipsis">
                {course.title}
            </h3>
            <div className="flex justify-start items-center gap-2 text-muted-foreground text-sm line-clamp-1 overflow-ellipsis">
                <UserIcon className="w-5 h-5"/>
                {course.teacher}
            </div>
            <div className="flex justify-start items-center gap-2 text-muted-foreground text-sm">
                <MapPinIcon className="w-5 h-5"/>
                {course.location}
            </div>
            <div className="w-full flex flex-col justify-center items-end text-xs text-muted-foreground relative bottom-2 gap-0.5">
                <span className="relative bottom-0.5">
                    Progress
                </span>
                <div className="w-full h-2 bg-[#f5f5f5] rounded-md">
                    <div className={cn("h-full rounded-md",
                        course.color && `bg-${course.color}-400/70`
                    )} style={{width: `${course.progress}%`}}>
                    </div>
                </div>
                <span className="text-foreground text-semibold">
                    {course.progress}%
                </span>
            </div>
        </div>
    )
}

export default CourseCard;