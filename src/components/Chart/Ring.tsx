import React from "react";
import ReactApexChart from "react-apexcharts";

type TRing = {
  value?: number | string;
  size?: string;
  height?: number | string;
};

const Ring = ({ value = 50, size = "30%", height = 160 }: TRing) => {
  return (
    <div className="relative_ z-10 bg-yellow-100">
      <ReactApexChart
        options={{
          plotOptions: {
            radialBar: {
              hollow: {
                size,
              },
            },
          },
          labels: [""],
        }}
        series={[value]}
        type="radialBar"
        height={height}
      />
    </div>
  );
};

export default React.memo(Ring);
