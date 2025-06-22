// filepath: /Users/samarthdev/Software_Engineering/Hackathons/Company_a_thon/GPTicker/src/data/GPUData.ts
export interface GPU {
  id: string;
  name: string;
  price: number;
  vendor: string;
  memory: string;
  availability: 'available' | 'limited' | 'unavailable';
}

export const gpuData: GPU[] = [
  {
    id: '1',
    name: 'NVIDIA H100',
    price: 1.40,
    vendor: 'SF Compute Company',
    memory: '80GB HBM3',
    availability: 'available'
  },
  {
    id: '2',
    name: 'NVIDIA A100',
    price: 0.89,
    vendor: 'CloudGPU Solutions',
    memory: '40GB HBM2e',
    availability: 'available'
  },
  {
    id: '3',
    name: 'NVIDIA V100',
    price: 0.45,
    vendor: 'TechCloud Inc',
    memory: '32GB HBM2',
    availability: 'limited'
  },
  {
    id: '4',
    name: 'NVIDIA RTX 4090',
    price: 0.35,
    vendor: 'GameCloud Pro',
    memory: '24GB GDDR6X',
    availability: 'available'
  },
  {
    id: '5',
    name: 'NVIDIA A6000',
    price: 0.65,
    vendor: 'Enterprise GPU Co',
    memory: '48GB GDDR6',
    availability: 'available'
  },
  {
    id: '6',
    name: 'NVIDIA RTX 3090',
    price: 0.28,
    vendor: 'Budget GPU Hub',
    memory: '24GB GDDR6X',
    availability: 'limited'
  },
  {
    id: '7',
    name: 'NVIDIA A40',
    price: 0.52,
    vendor: 'Professional Cloud',
    memory: '48GB GDDR6',
    availability: 'available'
  },
  {
    id: '8',
    name: 'NVIDIA Tesla K80',
    price: 0.12,
    vendor: 'Legacy Compute',
    memory: '24GB GDDR5',
    availability: 'unavailable'
  },
  {
    id: '9',
    name: 'NVIDIA H100 SXM',
    price: 1.85,
    vendor: 'Elite Computing',
    memory: '80GB HBM3',
    availability: 'limited'
  },
  {
    id: '10',
    name: 'NVIDIA RTX 4080',
    price: 0.32,
    vendor: 'Gaming Cloud Pro',
    memory: '16GB GDDR6X',
    availability: 'available'
  }
];