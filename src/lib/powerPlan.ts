import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export interface PowerPlan {
  id: string;
  name: string;
  processorPerformance: number;
  systemCooling: number;
  hardDiskTimeout: number;
  wirelessAdapterPower: string;
  usbSettings: string;
  pciExpressPower: string;
  isCustom?: boolean;
}

export async function getPowerPlans(): Promise<PowerPlan[]> {
  try {
    // Get list of power plans
    const { stdout } = await execAsync('powercfg /list');
    
    // Parse the output to get GUIDs and names
    const plans = stdout.split('\n')
      .filter(line => line.includes('Power Scheme GUID'))
      .map(line => {
        const match = line.match(/: ([\w-]+)\s+\((.*?)\)/);
        if (match) {
          return {
            id: match[1],
            name: match[2].trim()
          };
        }
        return null;
      })
      .filter(Boolean);

    // Get detailed settings for each plan
    const detailedPlans = await Promise.all(plans.map(async (plan) => {
      if (!plan) return null;
      
      // Get plan details using powercfg /query
      const { stdout: details } = await execAsync(`powercfg /query ${plan.id}`);
      
      // Parse the details (simplified for demo)
      return {
        id: plan.id,
        name: plan.name,
        processorPerformance: 90, // These would be parsed from actual output
        systemCooling: 80,
        hardDiskTimeout: 20,
        wirelessAdapterPower: "Medium",
        usbSettings: "Balanced",
        pciExpressPower: "Moderate savings",
        isCustom: !['381b4222-f694-41f0-9685-ff5bb260df2e', '8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c'].includes(plan.id)
      };
    }));

    return detailedPlans.filter(Boolean) as PowerPlan[];
  } catch (error) {
    console.error("Failed to fetch power plans:", error);
    return [];
  }
}

export async function comparePowerPlans(plan1: string, plan2: string) {
  // This would use actual benchmark results in a real implementation
  return {
    cpuScore: {
      [plan1]: Math.random() * 1000 + 8000,
      [plan2]: Math.random() * 1000 + 8000
    },
    gpuScore: {
      [plan1]: Math.random() * 1000 + 12000,
      [plan2]: Math.random() * 1000 + 12000
    },
    memoryScore: {
      [plan1]: Math.random() * 1000 + 5000,
      [plan2]: Math.random() * 1000 + 5000
    }
  };
}
