import { get } from "http";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
  searchParams: {};
}

const AboutHotel: React.FC<Props> = async (props) => {
  console.log("props about", props);
  const firstRes = await useHotelBySlug(props.params.slug);
  console.log("firstRes", firstRes);
  return (
    <div style={{
        backgroundColor: "red",
        height: "100vh",
    }}>
      <h1>About Hotel</h1>
    </div>
  );
};

export default AboutHotel;

const useHotelBySlug = async (slug: string) => {
  // create a fake hotel object returned after 1 second
  const hotel = {
    name: "Hotel Name",
    description: "Hotel Description",
  };

  // simulate a 1 second delay
  await new Promise((res) => setTimeout(res, 5000));

  return hotel;
};
