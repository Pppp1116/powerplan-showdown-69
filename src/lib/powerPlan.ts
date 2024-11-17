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

// Mock data for development - will be replaced with actual PowerCfg calls in Electron
export async function getPowerPlans(): Promise<PowerPlan[]> {
  return [
    {
      id: "381b4222-f694-41f0-9685-ff5bb260df2e",
      name: "Balanced",
      processorPerformance: 90,
      systemCooling: 80,
      hardDiskTimeout: 20,
      wirelessAdapterPower: "Medium",
      usbSettings: "Balanced",
      pciExpressPower: "Moderate savings",
      isCustom: false
    },
    {
      id: "8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c",
      name: "High Performance",
      processorPerformance: 100,
      systemCooling: 100,
      hardDiskTimeout: 0,
      wirelessAdapterPower: "Maximum Performance",
      usbSettings: "Disabled",
      pciExpressPower: "Off",
      isCustom: false
    },
    {
      id: "a1841308-3541-4fab-bc81-f71556f20b4a",
      name: "Power Saver",
      processorPerformance: 50,
      systemCooling: 60,
      hardDiskTimeout: 10,
      wirelessAdapterPower: "Low Power Saving",
      usbSettings: "Maximum Power Saving",
      pciExpressPower: "Maximum Power Saving",
      isCustom: false
    }
  ];
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