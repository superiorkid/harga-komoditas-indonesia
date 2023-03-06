import React from "react";
import { getData } from "@/app/components/ComodityList/ComodityList";
import moment from "moment";
import { notFound } from "next/navigation";

type PageParams = {
  params: {
    category: string;
  };
};

async function KomoditasDetailPage({ params: { category } }: PageParams) {
  const cleanParams = decodeURI(category);
  const commodity = await getData();
  const byCategory = commodity.national_commodity_price[cleanParams];

  if (!commodity) {
    notFound();
  }

  return (
    <div className="p-3">
      <div className="w-full mx-auto px-4 py-3">
        <h1 className="text-2xl font-semibold">Daftar Harga {cleanParams}</h1>
        <span className="text-sm italic">
          terakhir diupdate:{" "}
          {moment(commodity.updated_at, "DD-MM-YYYY").format("DD MMM YYYY")}
        </span>
      </div>

      <table className="w-full text-md text-left">
        <thead className="uppercase bg-red-500 shadow-lg rounded-lg text-white">
          <tr>
            <th className="px-6 py-4">Provinsi</th>
            <th className="px-6 py-4">Harga / kg</th>
          </tr>
        </thead>
        <tbody>
          {byCategory.map((data, index) => (
            <tr key={index} className="hover:bg-red-400">
              <td className="px-6 py-2">{data.name}</td>
              <td className="px-6 py-2">{data.display}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KomoditasDetailPage;

export const generateMetadata = async ({
  params: { category },
}: PageParams) => {
  const cleanParams = decodeURI(category);
  return { title: `Daftar Harga ${cleanParams}` };
};
