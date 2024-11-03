import React from "react";
import { ChevronDown, ChevronRight, Info } from "lucide-react";
import { IFeature } from "../interface";
import Status from "./Status";

interface TableBodyProps {
  features: IFeature[][];
  isCollapsed: { gosterge: boolean; bulut: boolean };
  setIsCollapsed: React.Dispatch<React.SetStateAction<{ gosterge: boolean; bulut: boolean }>>;
  toggleFeature: (columnIndex: number, featureId: string) => void;
  getStateColor: (state: string) => string;
}

export default function TableBody({ isCollapsed, features, setIsCollapsed, toggleFeature, getStateColor }: TableBodyProps) {
  return (
    <tbody>
      <tr>
        <td colSpan={5}>
          <div className="space-y-2">
            <div className="flex items-center gap-2 border-b pb-2">
              <button
                onClick={() =>
                  setIsCollapsed((prev) => ({
                    ...prev,
                    gosterge: !prev.gosterge,
                  }))
                }
                className="text-gray-500"
              >
                {isCollapsed.gosterge ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded text-green-500 checked:text-green-500 checked:border-green-500 focus:ring-0"
              />
              <span>Gösterge Paneli</span>
            </div>

            <div className="flex items-center gap-2 border-b pb-2">
              <button
                onClick={() =>
                  setIsCollapsed((prev) => ({
                    ...prev,
                    bulut: !prev.bulut,
                  }))
                }
                className="text-gray-500"
              >
                {isCollapsed.bulut ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded text-green-500 checked:text-green-500 checked:border-green-500 focus:ring-0"
              />
              <span>Bulut Santral</span>
              <div className="flex flex-1 grid-cols-5 px-32 justify-between">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded text-green-500 checked:text-green-500 checked:border-green-500 focus:ring-0"
                />
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded text-green-500 checked:text-green-500 checked:border-green-500 focus:ring-0"
                />
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded text-green-500 checked:text-green-500 checked:border-green-500 focus:ring-0"
                />
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded text-green-500 checked:text-green-500 checked:border-green-500 focus:ring-0"
                />
              </div>
            </div>

            {!isCollapsed.bulut && (
              <table className="w-full">
                <Status />
                <tbody>
                  <tr className="grid grid-cols-3 gap-x-8">
                    {features.map((column, columnIndex) => (
                      <td key={columnIndex} className="space-y-2">
                        {column.map((feature) => (
                          <div
                            key={feature.id}
                            className="flex items-center justify-between border-b py-2"
                          >
                            <div className="flex items-center gap-2">
                              <Info className="h-4 w-4 text-gray-400" />
                              <button
                                onClick={() =>
                                  toggleFeature(columnIndex, feature.id)
                                }
                                className="relative h-5 w-10 rounded-full bg-gray-200"
                              >
                                <div
                                  className={`absolute inset-0 rounded-full transition-all duration-200 ease-in-out ${getStateColor(
                                    feature.state
                                  )}`}
                                />
                                <div
                                  className={`absolute top-0.5 left-0.5 h-4 w-4 transform rounded-full bg-white shadow-md transition-all duration-200 ease-in-out ${
                                    feature.state === "left"
                                      ? "translate-x-0"
                                      : feature.state === "middle"
                                      ? "translate-x-2"
                                      : "translate-x-5"
                                  }`}
                                />
                              </button>
                              <span className="text-sm">{feature.name}</span>
                            </div>
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </td>
      </tr>
    </tbody>
  );
}
