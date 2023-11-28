import { LayoutProps } from "@/.next/types/app/layout";
import React from "react";

interface Props {
  slug: string;
}
const HotelBasics: React.FC<Props> = async ({ slug }) => {
  const hotelBasics = await getHotelBasics(slug);
  console.log("hotelBasics", slug);
  console.log("hotelBasics", hotelBasics);
  return (
    <div style={{ width: '300px'}}>
      <h1>{hotelBasics.name}</h1>
    </div>
  );
};

export default HotelBasics;

const getHotelBasics = async (slug: string) => {
  await new Promise((res) => setTimeout(res, 200));
  return {
    name: "Hotel Name",
    description: "Hotel Description",
  };
};
