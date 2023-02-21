export interface Ram {
  size: number;
  speed?: number;
  ddrType: string;
}

export interface Storage {
  size: string;
  model: string;
  maker: string;
  storageType: string;
}

export interface Cpu {
  maker: string;
  model: string;
  speed?: string;
  cores: number;
}

export interface Gpu {
  maker: string;
  model: string;
  vram: number;
}

export interface PowerSupply {
  name?: string;
  maker?: string;
  modularity?: string;
  wattage: number;
}

export interface CompCase {
  tower?: string;
  maker?: string;
  model?: string;
}

export interface Cooler {
  maker?: string;
  name?: string;
  coolerType?: string;
}

export interface Battary {
  size: number;
  time: number;
}
