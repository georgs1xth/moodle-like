import CourseOverview from "./_components/course-overview";
import LatestCourseUpdates from "./_components/latest-course-updates";
import LatestSubmissions from "./_components/latest-submissions";
import RecentAccessedCourses from "./_components/recent-accessed-courses";
import Widgets from "./_components/widgets";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-7">
      <div className="flex flex-col justify-start items-start col-span-5 gap-10">
        <RecentAccessedCourses />
        <LatestCourseUpdates />
        <div className="w-full grid grid-cols-2 gap-6 pl-4 pr-2">
          <div className="col-span-1 w-full">
            <CourseOverview />
          </div>
          <div className="col-span-1">
            <LatestSubmissions />
          </div>
        </div>
      </div>
      <div className="col-span-2 w-full pl-4 h-full">
          <Widgets />
      </div>
    </div>
  );
}
