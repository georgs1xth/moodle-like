import CourseCard from "@/app/(routes)/courses/_components/course-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AtomIcon, BotIcon, BrainIcon, CalendarDaysIcon, ChevronRightIcon, DatabaseIcon, FanIcon, LaptopIcon, LeafIcon, MapPinIcon, MicrochipIcon, OrbitIcon, RocketIcon, ShieldIcon, UserIcon, WavesIcon } from "lucide-react";
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
                        {CoursesList.map((course, i) => {
                            return(
                            <CarouselItem className="basis-1/3 pl-8 " key={i}>
                                <Link href={`courses/${course.id}`} key={i}>
                                    <CourseCard course={course}/>
                                </Link>
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