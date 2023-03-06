import React from "react";
import ComodityList from "../components/ComodityList/ComodityList";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto">
      <div className="flex space-x-5">
        <div className="w-1/3 bg-gray-300">
          {/* @ts-expect-error Server Component */}
          <ComodityList />
        </div>
        <div className="bg-red-300 w-full">{children}</div>
      </div>
    </div>
  );
}

export default layout;
