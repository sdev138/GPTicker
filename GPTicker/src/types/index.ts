export interface GPU {
  id: string;
  name: string;
  price: number;
  vendor: string;
  memory: string;
  availability: 'available' | 'limited' | 'unavailable';
}

export interface StockTickerProps {
  gpuData: GPU[];
}