import { ChevronDownIcon, MessageCircleMoreIcon, MessageSquareMoreIcon, PenLineIcon, UsersIcon } from "lucide-react";

const PeopleList = [
    {
        fullname: "Stuart Dave"
    },
    {
        fullname: "Lucy Lopez"
    },
    {
        fullname: "Michael Johnson"
    },
    {
        fullname: "Emily Clark"
    },
    {
        fullname: "William Brown"
    },
    {
        fullname: "Sophia Wilson"
    },
    {
        fullname: "James Smith"
    },
    {
        fullname: "Ava Davis"
    },
    {
        fullname: "Benjamin Martinez"
    },
    {
        fullname: "Olivia Harris"
    },
    {
        fullname: "Alexander Lee"
    },
    {
        fullname: "Charlotte Walker"
    }    
]

const Widgets = () => {
    return (
        <div className="w-full h-full flex flex-col justify-start items-start gap-4">
            <h2 className="w-full text-base font-semibold flex justify-end items-center text-[#005ba0] pr-4">
                <div className="px-2 py-0.5">
                    <PenLineIcon className="w-6 h-6" /> 
                </div>
                Customize this page
            </h2>
            <div className="w-full rounded-md bg-white shadow-sm pt-4 pl-4 pr-4 pb-6">
                <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="w-full flex justify-start items-center gap-2 text-[#005ba0]">
                        <div className="p-2">
                            <UsersIcon className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-0">
                            <h3 className="text-base font-semibold">
                                Online users
                            </h3>
                            <p className="text-xs font-semibold text-muted-foreground">
                                12 Online
                            </p>
                        </div>
                        <ChevronDownIcon className="w-6 h-6 ml-auto mr-1"/>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-4 pl-12">
                        {PeopleList.map((person, i) => (
                            <div className="w-full flex justify-start items-center gap-3" key={i}>
                                <div className="rounded-full w-10 h-10">
                                    <img src={`https://randomuser.me/api/portraits/thumb/men/${i}.jpg`} alt="user" className="w-full h-full rounded-full"/>
                                </div>
                                <p className="flex justify-start items-center font-semibold text-sm">
                                    {person.fullname}
                                </p>
                                <div className="p-2 ml-auto">
                                    <MessageSquareMoreIcon className="w-5 h-5"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widgets;