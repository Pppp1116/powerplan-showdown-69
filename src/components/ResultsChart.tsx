import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface ResultsChartProps {
  data: {
    cpuScore: { [key: string]: number };
    gpuScore: { [key: string]: number };
    memoryScore: { [key: string]: number };
  };
  plan1Name: string;
  plan2Name: string;
}

export function ResultsChart({ data, plan1Name, plan2Name }: ResultsChartProps) {
  const chartData = [
    {
      name: "CPU Score",
      [plan1Name]: data.cpuScore[plan1Name],
      [plan2Name]: data.cpuScore[plan2Name],
    },
    {
      name: "GPU Score",
      [plan1Name]: data.gpuScore[plan1Name],
      [plan2Name]: data.gpuScore[plan2Name],
    },
    {
      name: "Memory Score",
      [plan1Name]: data.memoryScore[plan1Name],
      [plan2Name]: data.memoryScore[plan2Name],
    },
  ];

  return (
    <div className="gaming-card">
      <h3 className="text-xl font-semibold mb-4 text-gaming-100">Performance Comparison</h3>
      <div className="w-full h-[400px]">
        <LineChart
          width={800}
          height={400}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
          <XAxis dataKey="name" stroke="#ffffff80" />
          <YAxis stroke="#ffffff80" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "#000000dd",
              border: "1px solid #39ff1440",
              borderRadius: "8px"
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey={plan1Name} 
            stroke="#39ff14" 
            strokeWidth={2}
            dot={{ fill: "#39ff14" }}
          />
          <Line 
            type="monotone" 
            dataKey={plan2Name} 
            stroke="#ff3939" 
            strokeWidth={2}
            dot={{ fill: "#ff3939" }}
          />
        </LineChart>
      </div>
    </div>
  );
}