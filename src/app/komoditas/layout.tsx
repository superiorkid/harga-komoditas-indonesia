import React from "react";
import ComodityList from "../components/ComodityList/ComodityList";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto">
      <div className="flex space-x-5 pt-2">
        <div className="w-1/3 bg-blue-400 rounded-md">
          {/* @ts-expect-error Server Component */}
          <ComodityList />
        </div>
        <div className="bg-red-300 w-full rounded-md">{children}</div>
      </div>
    </div>
  );
}

export default layout;
