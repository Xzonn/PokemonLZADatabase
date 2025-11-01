import React from "react";

interface StatBarProps {
  name: string;
  value: number;
  maxValue?: number;
}

export const PokemonStatBar: React.FC<StatBarProps> = ({ name, value, maxValue = 255 }) => {
  const percentage = Math.min((value / maxValue) * 100, 100);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-700">{name}</span>
        <span className="text-gray-600">{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
