// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, MemoryStick as Memory, Clock, Zap, Activity, Cpu, HardDrive, Gauge } from 'lucide-react';
// import { gpus } from '../data/GPUData';
// import { PriceTicker } from '../components/PriceTicker';
// import { PerformanceChart } from '../components/PerformanceChart';

// export const GPUDetailPage: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
  
//   const gpu = gpus.find(g => g.id === id);

//   if (!gpu) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-white mb-4">GPU Not Found</h2>
//           <button 
//             onClick={() => navigate('/')}
//             className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const getAvailabilityColor = (availability: string) => {
//     switch (availability) {
//       case 'Available':
//         return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
//       case 'Limited':
//         return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
//       case 'Out of Stock':
//         return 'text-red-400 bg-red-400/10 border-red-400/20';
//       default:
//         return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
//       {/* Header */}
//       <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <button
//             onClick={() => navigate('/')}
//             className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Back to GPUs
//           </button>
//           <div className="flex items-start justify-between">
//             <div>
//               <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
//                 {gpu.name}
//               </h1>
//               <p className="text-lg text-gray-400">{gpu.brand} • {gpu.model}</p>
//             </div>
//             <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getAvailabilityColor(gpu.availability)}`}>
//               {gpu.availability}
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* GPU Image and Description */}
//             <div className="bg-gray-800/50 rounded-2xl p-6">
//               <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center">
//                 <div className="text-center">
//                   <Cpu className="w-16 h-16 text-blue-400 mx-auto mb-4" />
//                   <p className="text-gray-400">GPU Visualization</p>
//                 </div>
//               </div>
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 {gpu.description}
//               </p>
//             </div>

//             {/* Specifications */}
//             <div className="bg-gray-800/50 rounded-2xl p-6">
//               <h2 className="text-2xl font-bold text-white mb-6">Specifications</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                     <Memory className="w-5 h-5 text-blue-400" />
//                     <div>
//                       <p className="text-gray-400 text-sm">Memory</p>
//                       <p className="text-white font-medium">{gpu.memory}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Activity className="w-5 h-5 text-purple-400" />
//                     <div>
//                       <p className="text-gray-400 text-sm">Cores</p>
//                       <p className="text-white font-medium">{gpu.cores.toLocaleString()}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Clock className="w-5 h-5 text-emerald-400" />
//                     <div>
//                       <p className="text-gray-400 text-sm">Base Clock</p>
//                       <p className="text-white font-medium">{gpu.baseClock}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Gauge className="w-5 h-5 text-green-400" />
//                     <div>
//                       <p className="text-gray-400 text-sm">Boost Clock</p>
//                       <p className="text-white font-medium">{gpu.boostClock}</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                     <Zap className="w-5 h-5 text-amber-400" />
//                     <div>
//                       <p className="text-gray-400 text-sm">Power Consumption</p>
//                       <p className="text-white font-medium">{gpu.powerConsumption}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <Cpu className="w-5 h-5 text-pink-400" />
//                     <div>
//                       <p className="text-gray-400 text-sm">Architecture</p>
//                       <p className="text-white font-medium">{gpu.specifications.architecture}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <HardDrive className="w-5 h-5 text-cyan-400" />
//                     <div>
//                       <p className="text-gray-400 text-sm">Memory Bandwidth</p>
//                       <p className="text-white font-medium">{gpu.specifications.memoryBandwidth}</p>
//                     </div>
//                   </div>
//                   {gpu.specifications.rtCores && (
//                     <div className="flex items-center gap-3">
//                       <Activity className="w-5 h-5 text-orange-400" />
//                       <div>
//                         <p className="text-gray-400 text-sm">RT Cores</p>
//                         <p className="text-white font-medium">{gpu.specifications.rtCores}</p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Performance Chart */}
//             <PerformanceChart gpu={gpu} />
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Pricing Card */}
//             <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
//               <h3 className="text-xl font-bold text-white mb-4">Rental Pricing</h3>
//               <div className="mb-6">
//                 <PriceTicker 
//                   price={gpu.price} 
//                   priceChange={gpu.priceChange} 
//                   size="lg"
//                   showAnimation={true}
//                 />
//               </div>
              
//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-300">Hourly Rate</span>
//                   <span className="text-white">${gpu.price.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-300">Daily Rate (20% off)</span>
//                   <span className="text-white">${(gpu.price * 24 * 0.8).toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-300">Weekly Rate (30% off)</span>
//                   <span className="text-white">${(gpu.price * 24 * 7 * 0.7).toFixed(2)}</span>
//                 </div>
//               </div>

//               <button 
//                 className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
//                 disabled={gpu.availability === 'Out of Stock'}
//               >
//                 {gpu.availability === 'Out of Stock' ? 'Out of Stock' : 'Rent Now'}
//               </button>
//             </div>

//             {/* Performance Score */}
//             <div className="bg-gray-800/50 rounded-2xl p-6">
//               <h3 className="text-lg font-semibold text-white mb-4">Performance Score</h3>
//               <div className="relative">
//                 <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
//                   <div 
//                     className="h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
//                     style={{ width: `${gpu.performanceScore}%` }}
//                   />
//                 </div>
//                 <div className="flex justify-between text-sm text-gray-400">
//                   <span>0%</span>
//                   <span className="text-white font-medium">{gpu.performanceScore}%</span>
//                   <span>100%</span>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="bg-gray-800/50 rounded-2xl p-6">
//               <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-gray-400">Efficiency</span>
//                   <span className="text-white">★★★★☆</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-400">Gaming</span>
//                   <span className="text-white">★★★★★</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-400">AI/ML</span>
//                   <span className="text-white">★★★★★</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-400">Rendering</span>
//                   <span className="text-white">★★★★☆</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };