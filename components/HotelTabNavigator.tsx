import Link from "next/link";
import React from "react";

interface Props {
  slug: string;
}
const HotelTabNavigator: React.FC<Props> = async ({ slug }) => {
  const tabs = await getTabs();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "center",
      }}
    >
      {tabs.map((tab: string) => (
        <Link key={`bla_${tab}`} href={`/hotel/${slug}/${tab}`}>
          {tab}
        </Link>
      ))}
    </div>
  );
};

export default HotelTabNavigator;

const getTabs = async () => {
  await new Promise((res) => setTimeout(res, 2000));
  return ["about", "rooms", "events"];
};
