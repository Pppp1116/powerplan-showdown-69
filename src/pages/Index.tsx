import { useState, useEffect } from "react";
import { PowerPlanSelector } from "@/components/PowerPlanSelector";
import { BenchmarkTest } from "@/components/BenchmarkTest";
import { ResultsChart } from "@/components/ResultsChart";
import { getPowerPlans, comparePowerPlans, type PowerPlan } from "@/lib/powerPlan";
import type { BenchmarkResult } from "@/lib/benchmark";

const Index = () => {
  const [plans, setPlans] = useState<PowerPlan[]>([]);
  const [selectedPlan1, setSelectedPlan1] = useState<string>("");
  const [selectedPlan2, setSelectedPlan2] = useState<string>("");
  const [comparisonResults, setComparisonResults] = useState<any>(null);
  const [benchmarkResult, setBenchmarkResult] = useState<BenchmarkResult | null>(null);

  useEffect(() => {
    const loadPlans = async () => {
      const availablePlans = await getPowerPlans();
      setPlans(availablePlans);
    };
    loadPlans();
  }, []);

  useEffect(() => {
    const compareSelected = async () => {
      if (selectedPlan1 && selectedPlan2) {
        const results = await comparePowerPlans(selectedPlan1, selectedPlan2);
        setComparisonResults(results);
      }
    };
    compareSelected();
  }, [selectedPlan1, selectedPlan2]);

  const handleBenchmarkComplete = (result: BenchmarkResult) => {
    setBenchmarkResult(result);
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-gaming-100">Power</span>Plan Comparison
        </h1>
        <p className="text-gray-400">
          Compare and benchmark different Windows power plans for optimal gaming performance
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PowerPlanSelector
          plans={plans}
          selectedPlan={selectedPlan1}
          onSelect={setSelectedPlan1}
          label="Power Plan 1"
        />
        <PowerPlanSelector
          plans={plans}
          selectedPlan={selectedPlan2}
          onSelect={setSelectedPlan2}
          label="Power Plan 2"
        />
      </div>

      {selectedPlan1 && selectedPlan2 && comparisonResults && (
        <ResultsChart
          data={comparisonResults}
          plan1Name={plans.find(p => p.id === selectedPlan1)?.name || "Plan 1"}
          plan2Name={plans.find(p => p.id === selectedPlan2)?.name || "Plan 2"}
        />
      )}

      <BenchmarkTest onComplete={handleBenchmarkComplete} />

      {benchmarkResult && (
        <div className="gaming-card">
          <h3 className="text-xl font-semibold mb-4 text-gaming-100">Benchmark Results</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-100">
                {Math.round(benchmarkResult.cpuScore)}
              </div>
              <div className="text-sm text-gray-400">CPU Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-100">
                {Math.round(benchmarkResult.gpuScore)}
              </div>
              <div className="text-sm text-gray-400">GPU Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-100">
                {Math.round(benchmarkResult.memoryScore)}
              </div>
              <div className="text-sm text-gray-400">Memory Score</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;