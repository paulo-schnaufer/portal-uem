import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="bg-uem-branco border border-uem-cinza-borda p-4 mb-2 animate-pulse flex flex-col gap-3 rounded-sm">
      <div className="flex justify-between items-start w-full">
        <div className="h-5 bg-uem-cinza-borda w-2/3 rounded-sm"></div>
        <div className="h-4 bg-uem-cinza-borda w-6 rounded-sm"></div>
      </div>
      <div className="flex gap-2 mt-1">
        <div className="h-6 bg-uem-cinza-borda w-20 rounded-sm"></div>
        <div className="h-6 bg-uem-cinza-borda w-32 rounded-sm"></div>
      </div>
    </div>
  );
}