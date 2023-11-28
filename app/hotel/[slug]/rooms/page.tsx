import { get } from "http";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
  searchParams: {};
}

const HotelRooms: React.FC<Props> = async (props) => {
  console.log("props 2", props);
  const firstRes = await getRooms(props.params.slug);
  console.log("firstRes", firstRes);
  return (
    <div>
      <h1>Hotel rooms</h1>
      {firstRes && (
        <>
          {firstRes.map((room: any) => (
            <>
              <p>Name: {room.name}</p>
              <p>Description: {room.description}</p>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default HotelRooms;

const getRooms = async (slug: string) => {
  // create a fake hotel object returned after 1 second
  const rooms = [
    {
      name: "Room 1",
      description: "Room 1 Description",
    },
    {
      name: "Room 2",
      description: "Room 2 Description",
    },
  ];

  // simulate a 1 second delay
  await new Promise((res) => setTimeout(res, 500));

  return rooms;
};
