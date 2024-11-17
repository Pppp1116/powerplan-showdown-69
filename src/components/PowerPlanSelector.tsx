import { PowerPlan } from "@/lib/powerPlan";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PowerPlanSelectorProps {
  plans: PowerPlan[];
  selectedPlan: string;
  onSelect: (planId: string) => void;
  label: string;
}

export function PowerPlanSelector({ plans, selectedPlan, onSelect, label }: PowerPlanSelectorProps) {
  return (
    <div className="gaming-card">
      <h3 className="text-xl font-semibold mb-4 text-gaming-100">{label}</h3>
      <Select value={selectedPlan} onValueChange={onSelect}>
        <SelectTrigger className="gaming-input">
          <SelectValue placeholder="Select a power plan" />
        </SelectTrigger>
        <SelectContent>
          {plans.map((plan) => (
            <SelectItem key={plan.id} value={plan.id}>
              {plan.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedPlan && (
        <div className="mt-4 space-y-2">
          {plans.find(p => p.id === selectedPlan) && (
            <>
              <div className="flex justify-between">
                <span>Processor Performance</span>
                <span className="text-gaming-100">
                  {plans.find(p => p.id === selectedPlan)?.processorPerformance}%
                </span>
              </div>
              <div className="flex justify-between">
                <span>System Cooling</span>
                <span className="text-gaming-100">
                  {plans.find(p => p.id === selectedPlan)?.systemCooling}%
                </span>
              </div>
              <div className="flex justify-between">
                <span>Hard Disk Timeout</span>
                <span className="text-gaming-100">
                  {plans.find(p => p.id === selectedPlan)?.hardDiskTimeout} min
                </span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}