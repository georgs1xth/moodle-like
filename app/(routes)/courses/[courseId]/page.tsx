import { AtomIcon, BotIcon, BrainIcon, DatabaseIcon, FanIcon, LaptopIcon, LeafIcon, MicrochipIcon, OrbitIcon, RocketIcon, ShieldIcon, WavesIcon } from "lucide-react";
import { title } from "process";
import CourseCard from "../_components/course-card";
import CourseInfo from "./_components/course-info";
import Link from "next/link";


const CoursesList = [
    {
        id: 0,
        title: "Elective course XII - Advanced Quantum Mechanics",
        teacher: "dr. Doofenschmeirz",
        location: "P6/312",
        time: "Monday 08:30",
        progress: 66,
        icon: AtomIcon,
        color: "blue",
    },
    {
        id: 1,
        title: "Elective course IV - Data Structures and Algorithms",
        teacher: "dr. Anita Max Win",
        location: "P7/302",
        time: "Wednesday 10:35",
        progress: 70,
        icon: DatabaseIcon,
        color: "violet",
    },
    {
        id: 2,
        title: "Elective course XV - Modern brainwash for despicablest",
        teacher: "dr. Gru",
        location: "Bank toilet",
        time: "Friday 10:20",
        progress: 32,
        icon: BrainIcon,
        color: "red",   
    },
    {
        id: 3,
        title: "Elective course XII - Cybersecurity and Cybernotsecurity",
        teacher: "dr. Anuarbek",
        location: "P9/312",
        time: "Monday 08:30",
        progress: 98,
        icon: LaptopIcon,
        color: "emerald",   
    },
    {
        id: 4,
        title: "Elective course IX - Astrophysics and Space Travel",
        teacher: "dr. Neil deGrasse Tyson",
        location: "P1/200",
        time: "Tuesday 11:00",
        progress: 85,
        icon: RocketIcon,
        color: "purple",
    },
    {
        id: 5,
        title: "Elective course VII - Ethical Hacking and Penetration Testing",
        teacher: "dr. Kevin Mitnick",
        location: "P5/110",
        time: "Thursday 14:00",
        progress: 92,
        icon: ShieldIcon,
        color: "gray",
    },
    {
        id: 6,
        title: "Elective course III - Artificial Intelligence and Machine Learning",
        teacher: "dr. Andrew Ng",
        location: "P4/208",
        time: "Monday 10:00",
        progress: 75,
        icon: FanIcon,
        color: "orange",
    },
    {
        id: 7,
        title: "Elective course VI - Introduction to Nanotechnology",
        teacher: "dr. Richard Feynman",
        location: "P3/115",
        time: "Tuesday 13:15",
        progress: 50,
        icon: MicrochipIcon,
        color: "cyan",
    },
    {
        id: 8,
        title: "Elective course II - Neuroscience of Learning",
        teacher: "dr. John Medina",
        location: "P8/222",
        time: "Thursday 09:45",
        progress: 80,
        icon: WavesIcon,
        color: "green",
    },
    {
        id: 9,
        title: "Elective course V - Robotics and Automation",
        teacher: "dr. Rodney Brooks",
        location: "P2/314",
        time: "Wednesday 15:30",
        progress: 60,
        icon: BotIcon,
        color: "yellow",
    },
    {
        id: 10,
        title: "Elective course VIII - Bioinformatics and Computational Biology",
        teacher: "dr. Francis Collins",
        location: "P6/205",
        time: "Friday 12:10",
        progress: 45,
        icon: LeafIcon,
        color: "blue",
    },
    {
        id: 11,
        title: "Elective course XI - Quantum Computing",
        teacher: "dr. David Deutsch",
        location: "P10/308",
        time: "Monday 16:00",
        progress: 55,
        icon: OrbitIcon,
        color: "pink",
    }
    
];


const Courses = async ({
    params,
}: {
    params: Promise<{ courseId: number }>
}) => {

    const courseId = (await params).courseId

    return(
        <div className="w-full grid grid-cols-2 gap-0">
            <div className="col-span-1 w-full flex flex-col gap-4 pl-8 pt-1 pr-6">
                <h2 className="text-lg font-semibold">
                    My Courses
                </h2>
                <div className=" grid grid-cols-2 gap-6">
                    {
                        CoursesList.map((course, i) => (
                            <Link href={`/courses/${course.id}`} key={i}>
                                <CourseCard key={i} course={course}/>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="col-span-1 w-full pt-12">
                <CourseInfo course={CoursesList[courseId]}/>
            </div>
        </div>
    )

}

export default Courses;