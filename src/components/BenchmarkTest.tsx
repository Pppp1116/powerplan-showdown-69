import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { runBenchmark, BenchmarkResult } from "@/lib/benchmark";
import { toast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

interface BenchmarkTestProps {
  onComplete: (result: BenchmarkResult) => void;
}

export function BenchmarkTest({ onComplete }: BenchmarkTestProps) {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTest, setCurrentTest] = useState<string>("");

  const startBenchmark = async () => {
    setIsRunning(true);
    setProgress(0);

    const tests = ["CPU", "GPU", "Memory", "Disk", "Network"];
    let currentProgress = 0;

    for (const test of tests) {
      setCurrentTest(test);
      
      // Simulate test progress
      for (let i = 0; i < 20; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        currentProgress = Math.min(currentProgress + 1, 100);
        setProgress(currentProgress);
      }
    }

    try {
      const result = await runBenchmark();
      setProgress(100);
      onComplete(result);
      toast({
        title: "Benchmark Complete",
        description: "Full system benchmark has finished successfully.",
      });
    } catch (error) {
      toast({
        title: "Benchmark Failed",
        description: "There was an error running the benchmark.",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
      setCurrentTest("");
    }
  };

  return (
    <div className="gaming-card">
      <h3 className="text-xl font-semibold mb-4 text-gaming-100">Full System Benchmark</h3>
      <div className="space-y-4">
        <Progress value={progress} className="h-2 bg-black/60" />
        {currentTest && (
          <p className="text-sm text-gaming-100">Testing: {currentTest}</p>
        )}
        <Button 
          onClick={startBenchmark} 
          disabled={isRunning}
          className="gaming-button w-full"
        >
          {isRunning ? "Running Full System Benchmark..." : "Start Full System Benchmark"}
        </Button>
      </div>
    </div>
  );
}