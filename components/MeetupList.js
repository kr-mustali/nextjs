import Meetup from "./Meetup";
export default function MeetupList(props) {
  return (
    <>
      <h2 className="text-center mt-4 mb-4">List of Meetups</h2>
      {props.meetups.map((meetup) => {
        return <Meetup key={meetup.id} {...meetup} />;
      })}
    </>
  );
}
