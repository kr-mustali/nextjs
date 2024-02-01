import Image from "next/image";
import { useRouter } from "next/router";

export default function Meetup({ id, title, img, address, description }) {
  const router = useRouter();
  const meetupDetails = () => {
    router.push(`/${id}`);
    console.log(id);
  };
  return (
    <div className="mb-4">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src={img} alt="Meetup Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">{title}</div>
          <p className="text-slate-800">Meetup location: {address}</p>
          <button
            type="submit"
            className="rounded-md  px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={meetupDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
