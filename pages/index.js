import MeetupList from "@/components/MeetupList";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
// import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meetup1",
    img: "https://lh3.googleusercontent.com/p/AF1QipNrv987lspSF5bdVZJQvK_DFvU-_zh-MoVPh3xP=s680-w680-h510",
    address: "location",
    description: "some meetup1",
  },
  {
    id: "m2",
    title: "Meetup2",
    img: "https://lh3.googleusercontent.com/p/AF1QipNrv987lspSF5bdVZJQvK_DFvU-_zh-MoVPh3xP=s680-w680-h510",
    address: "location",
    description: "some meetu2p",
  },
  {
    id: "m3",
    title: "Meetup3",
    img: "https://lh3.googleusercontent.com/p/AF1QipNrv987lspSF5bdVZJQvK_DFvU-_zh-MoVPh3xP=s680-w680-h510",
    address: "location",
    description: "some meetup3",
  },
];

export default function Home() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setMeetups(DUMMY_MEETUPS);
  }, []);

  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
