const CourseList = [
    {
        title: "Methodology for scientific reasearch and development of evil plans for world overtake and domination",
        semester: 7,
        progress: 50
    },
    {
        title: "Electromagnetic waves and their applications in the field of mind control",
        semester: 7,
        progress: 65
    },
    {
        title: "Science of using minions and their applications in the field of world domination",
        semester: 7,
        progress: 80
    }
]


const CourseOverview = () => {

    return(
        <div className="w-full flex flex-col pl-6 pt-4 pr-4 pb-5 gap-3 bg-white shadow-sm rounded-md">
            <h3 className="text-lg font-semibold">
                Course overview
            </h3>
            <div className="w-full flex flex-col gap-4">
                {CourseList.map((course, i) => (
                    <div className="w-full flex justify-between gap-1" key={i}>
                        <div className="w-2/3 flex flex-col gap-0">
                            <h4 className="text-base line-clamp-2 overflow-ellipsis">
                                {course.title}
                            </h4>
                            <p className="text-muted-foreground text-xs font-semibold">
                                Semester {course.semester}
                            </p>
                        </div>
                        <div className="flex w-1/3 flex-col gap-0.5 justify-end items-end pb-3">
                            <p className="text-xs text-muted-foreground"><span className="font-semibold">{course.progress}%</span> Completed</p>
                            <div className="w-full h-2 bg-[#005ba015] rounded-md">
                                <div className={`h-full bg-[#005ba0] rounded-md`} style={{width:(course.progress + "%")}}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseOverview;