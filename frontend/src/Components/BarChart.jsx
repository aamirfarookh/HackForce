import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Footer from "./Footer";
import Loaderr from "./Loader";

const pdata = [
  {
    name: "Python",
    student: 13,
    fees: 10,
  },
  {
    name: "Javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 10,
    fees: 5,
  },
  {
    name: "C#",
    student: 9,
    fees: 4,
  },
  {
    name: "C++",
    student: 10,
    fees: 8,
  },
];

function Bargraph() {
  const [lineChartLoading, setLineChartLoading] = useState(true);
  const [areaChartLoading, setAreaChartLoading] = useState(true);
  const [barChartLoading, setBarChartLoading] = useState(true);
  const [pieChartLoading, setPieChartLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay for each chart
    const lineChartTimer = setTimeout(() => {
      setLineChartLoading(false);
    }, 2000);

    const areaChartTimer = setTimeout(() => {
      setAreaChartLoading(false);
    }, 2500);

    const barChartTimer = setTimeout(() => {
      setBarChartLoading(false);
    }, 3000);

    const pieChartTimer = setTimeout(() => {
      setPieChartLoading(false);
    }, 3500);

    return () => {
      clearTimeout(lineChartTimer);
      clearTimeout(areaChartTimer);
      clearTimeout(barChartTimer);
      clearTimeout(pieChartTimer);
    };
  }, []);

  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function createcolor(num) {
    return `rgba(${random(255)},${random(255)},${random(255)})`;
  }

  return (
    <>
      <>
        {lineChartLoading ? (
          <Loaderr x={" LineChart is Loading...!!!"} />
        ) : (
          <>
            <h1 className="chart-heading text-center font-bold text-xl">
              Line Chart
            </h1>
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart
                data={pdata}
                width={500}
                height={300}
                margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  interval={"preserveStartEnd"}
                  tickFormatter={(value) => value + " Programming"}
                />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: createcolor(255) }} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="student"
                  stroke={createcolor(255)}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="fees"
                  stroke={createcolor(255)}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </>
        )}
      </>
      <br />
      <br />

      {areaChartLoading ? (
        <Loaderr x={" AreaChart is Loading...!!!"} />
      ) : (
        <>
          <h1 className="chart-heading text-center font-bold text-xl">
            Area Chart
          </h1>
          <ResponsiveContainer width="100%" aspect={3}>
            <AreaChart
              width={500}
              height={300}
              data={pdata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="student"
                stroke={createcolor(255)}
                fill={createcolor(255)}
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
      <br />
      <br />

      {barChartLoading ? (
        <Loaderr x={" BarChart is Loading...!!!"} />
      ) : (
        <>
          <h1 className="chart-heading text-center font-bold text-xl">
            Bar Chart
          </h1>
          <ResponsiveContainer width="100%" aspect={3}>
            <BarChart
              width={500}
              height={300}
              data={pdata}
              backgroundColor={createcolor(255)}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="student" fill={createcolor(255)} />
              <Bar dataKey="fees" fill={createcolor(255)} />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
      <br />
      <br />
      {pieChartLoading ? (
        <Loaderr x={" PieChart is Loading...!!!"} />
      ) : (
        <>
          <h1 className="chart-heading text-center font-bold text-xl">
            Pie Chart
          </h1>
          <ResponsiveContainer width="100%" aspect={3}>
            <PieChart>
              <Pie
                data={pdata}
                dataKey="student"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={180}
                fill={createcolor(255)}
                label={(entry) => entry.name}
              >
                {pdata.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={createcolor(255)} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: createcolor(255) }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </>
      )}
      <Footer />
    </>
  );
}

export default Bargraph;
