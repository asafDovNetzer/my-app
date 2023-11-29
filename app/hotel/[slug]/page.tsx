import React from "react";

interface Props {
  params: {
    slug: string;
  };
  searchParams: {};
}

const HotelPage: React.FC<Props> = async (props) => {

  const firstRes = await getHotelBySlug(props.params.slug);
  
console.log('firstRes', firstRes);
  return (
    <div>
      <h1>Hotel Page</h1>
      <p>Slug: {props.params.slug}</p>
      {firstRes && (
        <>
          <p>Name: {firstRes.name}</p>
          <p>Description: {firstRes.description}</p>
        </>
      )}
    </div>
  );
};

export default HotelPage;

const getHotelBySlug = async (slug: string) => {
  // create a fake hotel object returned after 1 second
  const hotel = {
    name: "Hotel Name",
    description: "Hotel Description",
  };

  // simulate a 1 second delay
  await new Promise((res) => setTimeout(res, 4000));

  return hotel;
};
