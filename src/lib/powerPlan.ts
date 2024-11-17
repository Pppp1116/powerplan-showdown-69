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
  // In a real implementation, this would use Windows APIs to get all power plans
  // including custom ones from the system
  return [
    {
      id: "381b4222-f694-41f0-9685-ff5bb260df2e",
      name: "Balanced",
      processorPerformance: 90,
      systemCooling: 80,
      hardDiskTimeout: 20,
      wirelessAdapterPower: "Medium",
      usbSettings: "Balanced",
      pciExpressPower: "Moderate savings"
    },
    {
      id: "8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c",
      name: "High Performance",
      processorPerformance: 100,
      systemCooling: 100,
      hardDiskTimeout: 0,
      wirelessAdapterPower: "Maximum Performance",
      usbSettings: "Disabled",
      pciExpressPower: "Off"
    },
    {
      id: "custom-1",
      name: "Ultimate Gaming",
      processorPerformance: 100,
      systemCooling: 100,
      hardDiskTimeout: 0,
      wirelessAdapterPower: "Maximum Performance",
      usbSettings: "Disabled",
      pciExpressPower: "Off",
      isCustom: true
    },
    {
      id: "custom-2",
      name: "Silent Gaming",
      processorPerformance: 95,
      systemCooling: 70,
      hardDiskTimeout: 10,
      wirelessAdapterPower: "Medium",
      usbSettings: "Balanced",
      pciExpressPower: "Moderate savings",
      isCustom: true
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