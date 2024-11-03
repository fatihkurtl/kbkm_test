import { useState } from "react";

import Header from "./components/Header";
import { IFeature } from "./interface";
import { FEATURES } from "./constants/features";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";

function App() {
  const [isCollapsed, setIsCollapsed] = useState({
    gosterge: false,
    bulut: false,
  });

  const getStateColor = (state: string) => {
    switch (state) {
      case "left":
        return "bg-[#FF8C93]";
      case "middle":
        return "bg-[#FFDFA9]";
      case "right":
        return "bg-[#BFF9E1]";
      default:
        return "bg-gray-200";
    }
  };

  const getSwitchColor = (state: string) => {
    switch (state) {
      case "left":
        return "bg-[#E31E24]";
      case "middle":
        return "bg-[#FDAB3D]";
      case "right":
        return "bg-[#00C875]";
      default:
        return "bg-gray-200";
    }
  };

  const [features, setFeatures] = useState<IFeature[][]>(FEATURES);

  const toggleFeature = (columnIndex: number, featureId: string) => {
    setFeatures((prevFeatures) => {
      const newFeatures = [...prevFeatures];
      const column = [...newFeatures[columnIndex]];
      const featureIndex = column.findIndex((f) => f.id === featureId);

      if (featureIndex !== -1) {
        const currentState = column[featureIndex].state;
        let newState: "left" | "middle" | "right";

        switch (currentState) {
          case "left":
            newState = "middle";
            break;
          case "middle":
            newState = "right";
            break;
          case "right":
            newState = "left";
            break;
          default:
            newState = "right";
        }

        column[featureIndex] = {
          ...column[featureIndex],
          state: newState,
        };
      }

      newFeatures[columnIndex] = column;
      return newFeatures;
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-[#EAFAFF] via-[#F8F4FF] to-[#FFF3FD] p-4">
        <div className="mx-auto max-w-screen space-y-4">
          <Header />
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <table className="w-full">
              <TableHead />
              <TableBody
                features={features}
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                toggleFeature={toggleFeature}
                getStateColor={getStateColor}
                getSwitchColor={getSwitchColor}
              />
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
