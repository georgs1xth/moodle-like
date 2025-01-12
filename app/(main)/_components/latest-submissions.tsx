import { FileTextIcon, MoreVerticalIcon } from "lucide-react";
import Link from "next/link";

const SubmissionList = [
    {
        title: "Assignment 1 (TEAM TASK)",
        course: "Methodology for scientific reasearch and development of evil plans for world overtake and domination",
    },
    {
        title: "Report No. 2 Analysis of the current world situation",
        course: "Science of using minions and their applications in the field of world domination",
    },
    {
        title: "Final project: World domination plan",
        course: "Electromagnetic waves and their applications in the field of mind control",
    }

]


const LatestSubmissions = () => {

    return(
        <div className="w-full flex flex-col pl-6 pt-4 pr-4 pb-5 gap-3 bg-white shadow-sm rounded-md">
            <h3 className="text-lg font-semibold">
                Latest submissions
            </h3>
            <div className="w-full flex flex-col gap-4">
                {SubmissionList.map((submission, i) => (
                    <div className="w-full flex justify-between gap-2" key={i}>
                        <div className="flex gap-1">
                            <div className="p-2">
                                <FileTextIcon className="w-6 h-6"/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-base line-clamp-1 overflow-ellipsis">
                                    {submission.title}
                                </h4>
                                <p className="text-muted-foreground line-clamp-1 overflow-ellipsis text-xs font-semibold">
                                    {submission.course}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-grow w-1/3 gap-2.5 justify-end items-center">
                            <Link href="/courses" className="w-max h-max flex justify-center items-center px-4 py-2 bg-[#005ba0] text-card rounded-full font-semibold text-xs">
                                Edit
                            </Link>
                            <Link href="/courses" className="w-max h-max flex justify-center items-center px-4 py-2 bg-[#005ba015] text-[#005ba0] rounded-full font-semibold text-xs">
                                Delete
                            </Link>
                            <div className="py-1 cursor-pointer">
                                <MoreVerticalIcon className="w-4 h-4"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestSubmissions;