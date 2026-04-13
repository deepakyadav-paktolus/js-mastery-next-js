import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { Button } from "@/components/ui/button";

const page = () => {
  const mockData =[
          {
            location: "Delhi",
            time: "09:00 am",
            title: "Vue Meetup",
            slug: "event1",
            date: "15/05/2024",
          },
          {
            location: "Hyderabad",
            time: "06:00 pm",
            title: "Angular Conference",
            slug: "event2",
            date: "20/06/2024",
          },
          {
            location: "Chennai",
            time: "11:00 am",
            title: "React Native Workshop",
            slug: "event3",
            date: "05/07/2024",
          },
          {
            location: "Kolkata",
            time: "02:00 pm",
            title: "JavaScript Summit",
            slug: "event4",
            date: "18/08/2024",
          },
          {
            location: "Mumbai",
            time: "10:30 am",
            title: "Frontend Dev Meetup",
            slug: "event5",
            date: "25/09/2024",
          },
          {
            location: "Bangalore",
            time: "04:00 pm",
            title: "Next.js Meetup",
            slug: "event6",
            date: "12/10/2024",
          },
          {
            location: "Pune",
            time: "09:30 am",
            title: "TypeScript Bootcamp",
            slug: "event7",
            date: "03/11/2024",
          },
          {
            location: "Ahmedabad",
            time: "01:00 pm",
            title: "Full Stack Conference",
            slug: "event8",
            date: "22/12/2024",
          },

          {
            location: "Jaipur",
            time: "10:00 am",
            title: "UI/UX Design Meetup",
            slug: "event9",
            date: "10/01/2025",
          },
          {
            location: "Surat",
            time: "03:00 pm",
            title: "Backend Dev Summit",
            slug: "event10",
            date: "18/01/2025",
          },
          {
            location: "Lucknow",
            time: "11:30 am",
            title: "Python Workshop",
            slug: "event11",
            date: "25/01/2025",
          },
          {
            location: "Indore",
            time: "05:00 pm",
            title: "Django Conference",
            slug: "event12",
            date: "02/02/2025",
          },
          {
            location: "Bhopal",
            time: "09:00 am",
            title: "AI & ML Meetup",
            slug: "event13",
            date: "10/02/2025",
          },
          {
            location: "Nagpur",
            time: "04:30 pm",
            title: "Cloud Computing Expo",
            slug: "event14",
            date: "18/02/2025",
          },
          {
            location: "Chandigarh",
            time: "12:00 pm",
            title: "DevOps Bootcamp",
            slug: "event15",
            date: "25/02/2025",
          },
          {
            location: "Noida",
            time: "02:30 pm",
            title: "Cybersecurity Summit",
            slug: "event16",
            date: "05/03/2025",
          },

          {
            location: "Gurgaon",
            time: "10:00 am",
            title: "Startup Tech Meetup",
            slug: "event17",
            date: "12/03/2025",
          },
          {
            location: "Patna",
            time: "01:30 pm",
            title: "Open Source Meetup",
            slug: "event18",
            date: "20/03/2025",
          },
          {
            location: "Kochi",
            time: "03:30 pm",
            title: "Mobile Dev Conference",
            slug: "event19",
            date: "28/03/2025",
          },
          {
            location: "Trivandrum",
            time: "11:00 am",
            title: "Flutter Workshop",
            slug: "event20",
            date: "05/04/2025",
          },
          {
            location: "Coimbatore",
            time: "09:30 am",
            title: "Data Science Summit",
            slug: "event21",
            date: "12/04/2025",
          },
          {
            location: "Mysore",
            time: "04:00 pm",
            title: "Game Dev Meetup",
            slug: "event22",
            date: "20/04/2025",
          },
          {
            location: "Vizag",
            time: "02:00 pm",
            title: "Blockchain Conference",
            slug: "event23",
            date: "28/04/2025",
          },
          {
            location: "Vadodara",
            time: "10:30 am",
            title: "API Dev Workshop",
            slug: "event24",
            date: "05/05/2025",
          },

          {
            location: "Ranchi",
            time: "01:00 pm",
            title: "Web Performance Meetup",
            slug: "event25",
            date: "12/05/2025",
          },
          {
            location: "Dehradun",
            time: "03:00 pm",
            title: "Tech Leadership Summit",
            slug: "event26",
            date: "20/05/2025",
          },
          {
            location: "Amritsar",
            time: "11:00 am",
            title: "E-commerce Dev Meetup",
            slug: "event27",
            date: "28/05/2025",
          },
          {
            location: "Jodhpur",
            time: "05:30 pm",
            title: "SaaS Conference",
            slug: "event28",
            date: "05/06/2025",
          },
          {
            location: "Udaipur",
            time: "09:00 am",
            title: "Product Dev Meetup",
            slug: "event29",
            date: "12/06/2025",
          },
        ]
  return (
    <>
   <section className="text-center px-4 sm:px-6 md:px-10 py-12 md:py-20">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
          Make every moment unforgettable <br />
          we plan, design, and bring your perfect event to life.
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300">
          Meetup, conferences and events all at one place
        </p>

        <ExploreBtn />
      </section>
      <div
        id="events"
        className="flex gap-6 flex-row justify-center flex-wrap m-8"
      >
        {mockData.map((item, index) => (
          <EventCard
            key={index}
            location={item.location}
            time={item.time}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </>
  );
};

export default page;
