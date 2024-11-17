import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { runBenchmark, BenchmarkResult } from "@/lib/benchmark";
import { toast } from "@/components/ui/use-toast";

interface BenchmarkTestProps {
  onComplete: (result: BenchmarkResult) => void;
}

export function BenchmarkTest({ onComplete }: BenchmarkTestProps) {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startBenchmark = async () => {
    setIsRunning(true);
    setProgress(0);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress(p => Math.min(p + 2, 100));
    }, 60);

    try {
      const result = await runBenchmark();
      clearInterval(interval);
      setProgress(100);
      onComplete(result);
      toast({
        title: "Benchmark Complete",
        description: "The benchmark test has finished successfully.",
      });
    } catch (error) {
      toast({
        title: "Benchmark Failed",
        description: "There was an error running the benchmark.",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="gaming-card">
      <h3 className="text-xl font-semibold mb-4 text-gaming-100">Benchmark Test</h3>
      <div className="space-y-4">
        <Progress value={progress} className="h-2 bg-black/60" />
        <Button 
          onClick={startBenchmark} 
          disabled={isRunning}
          className="gaming-button w-full"
        >
          {isRunning ? "Running Benchmark..." : "Start Benchmark"}
        </Button>
      </div>
    </div>
  );
}