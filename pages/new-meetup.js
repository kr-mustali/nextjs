import NewMeetupForm from "@/components/NewMeetupForm";
import React from "react";

export default function NewMeetup() {
  async function addMeetup(meetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div>
      <NewMeetupForm addMeetup={addMeetup} />
    </div>
  );
}
