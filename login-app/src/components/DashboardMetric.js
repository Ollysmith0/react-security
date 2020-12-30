import React from "react";

const DashboardMetric = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border-t-4 border-mygreen">
      <p className="text-gray-600 uppercase text-xs">
        <img src={icon} alt="dashboardmetric" className="mr-2 w-10 h-14" />
        {title}
      </p>
      <p className="text-3xl text-mygreen font-bold">{value}</p>
    </div>
  );
};

export default DashboardMetric;
