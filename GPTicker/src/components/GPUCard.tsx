import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useHistory } from "react-router-dom";

interface GPUCardProps {
  name: string;
  price: number;
  vendor: string;
  memory: string;
  availability: 'available' | 'limited' | 'unavailable';
}

export function GPUCard({ name, price, vendor, memory, availability }: GPUCardProps) {
  const history = useHistory();

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500';
      case 'limited':
        return 'bg-yellow-500';
      case 'unavailable':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleRentClick = () => {
    history.push({
      pathname: '/stock-ticker',
      state: { name, price, vendor, memory, availability }
    });
  };

  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-600">{memory}</p>
        </div>
        <Badge className={`${getAvailabilityColor(availability)} text-white capitalize`}>
          {availability}
        </Badge>
      </div>
      
      <div className="mb-4">
        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          ${price.toFixed(2)}
        </div>
        <p className="text-sm text-gray-500">per hour</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Vendor</p>
          <p className="font-semibold text-gray-900">{vendor}</p>
        </div>
        <button 
          onClick={handleRentClick} 
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium"
        >
          Rent
        </button>
      </div>
    </Card>
  );
}