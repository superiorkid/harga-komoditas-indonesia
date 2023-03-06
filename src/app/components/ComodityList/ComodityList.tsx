import Link from "next/link";
import React from "react";

const THIRTY_MINUTES = 1800;

export const getData = async () => {
  const res = await fetch("https://jibs.my.id/api/harga_komoditas", {
    next: { revalidate: THIRTY_MINUTES },
  });
  
  if (!res.ok) {
    throw new Error("cannot fetch data");
  }
  const data: ICommodity = await res.json();
  return data;
};

async function ComodityList() {
  const commodity = await getData();
  const getCategory = Object.keys(commodity.national_commodity_price);

  return (
    <>
      <div className="flex flex-col p-3 space-y-3 font-semibold text-xl">
        {getCategory.map((category, index) => (
          <Link
            key={index}
            href={`/komoditas/${category}`}
            className="hover:bg-gray-500 p-2 rounded"
          >
            {category}
          </Link>
        ))}
      </div>
    </>
  );
}

export default ComodityList;
