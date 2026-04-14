import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { Button } from "@/components/ui/button";
import { IEvent } from "@/database";
import events from "@/lib/constants";
import { cacheLife } from "next/cache";
 const  BASE_URL =process.env.NEXT_PUBLIC_BASE_URL
const page = async () => {
  'use cache';
    cacheLife('hours')
    const response = await fetch(`${BASE_URL}/api/events`);
    const { events } = await response.json();
    console.log(events)
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
         <ul className="events">
                    {events && events.length > 0 && events.map((event: IEvent) => (
                      
                        <li key={event.title} className="list-none">
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
      </div>
    </>
  );
};

export default page;
