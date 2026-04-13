import { CalendarRangeIcon, Clock2, Heart, MapPin } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
  location: string;
  time: string;
  title: string;
  date: string;
}
const EventCard = ({ location, time, title, date }: EventCardProps) => {
  return (
    <>
      <div className="border-2 relative border-red-500 h-80 rounded-sm w-64">
        <Image src="/img1.jpg" alt="Next.js Logo" width={100} height={100} />
        <span className="absolute top-0 right-0  m-1 p-1  rounded-full bg-black/30">
          {" "}
          <Heart size={16} />
        </span>
        <section className="absolute bottom-0 w-63 flex flex-col gap-2 p-2 ">
          <span className="flex gap-1 items-center">
            <MapPin size={16} />
            {location}
          </span>
          <h1 className="text-2xl">{title}</h1>
          <div className="flex flex-row gap-3 text-white">
            {" "}
            <span className="flex gap-1 items-center">
              <CalendarRangeIcon size={16} /> 
              {date}
            </span>
            <span className="text-gray-500">|</span>
            <span className="flex gap-1 items-center">
              {" "}
              <Clock2 size={16} />
              {time}
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventCard;
