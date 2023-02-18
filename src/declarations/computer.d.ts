export interface Ram {
  size: number;
  speed?: number;
  ddrType: string;
}

export interface Storage {
  size: string;
  model: string;
  maker: string;
  type: string;
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
