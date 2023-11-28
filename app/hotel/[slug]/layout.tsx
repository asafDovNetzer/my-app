import { LayoutProps } from "@/.next/types/app/layout";
import HotelBasics from "@/components/HotelBasics";
import HotelTabNavigator from "@/components/HotelTabNavigator";
import React, { Suspense } from "react";

const HotelLayout = async ({ params, children }: LayoutProps) => {
  console.log("props in layout", params);
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          backgroundColor: "yellow",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <HotelBasics slug={params.slug} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <HotelTabNavigator slug={params.slug} />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}> {children}</Suspense>
    </>
  );
};

export default HotelLayout;
