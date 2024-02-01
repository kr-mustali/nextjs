import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NewMeetupForm({ addMeetup }) {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const meetupData = {
    title,
    address,
    img,
    description,
  };

  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-lg mt-5 items-center space-x-4">
      <div className=" grid ">
        <div className="sm:col-span-3">
          <label
            htmlFor="meetup-title"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Meetup Title
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="meetup-title"
              id="meetup-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoComplete="given-name"
              className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            htmlFor="meetup-address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Meetup Address
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="meetup-address"
              id="meetup-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="given-name"
              className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            htmlFor="meetup-description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Meetup Description
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="meetup-description"
              id="meetup-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              autoComplete="given-name"
              className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            htmlFor="meetup-img"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Meetup Image
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="meetup-img"
              id="meetup-img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              autoComplete="given-name"
              className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={() => addMeetup(meetupData)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default NewMeetupForm;
