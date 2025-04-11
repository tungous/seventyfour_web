import { AnimatePresence } from "motion/react";
import { creatives, creativeType } from "./CreativeItems";
import CreativeCard from "@/components/ui/Homepage/creatives/CreativeCard";
import CreativeInfo from "@/components/ui/Homepage/creatives/CreativeInfo";
import { useState } from "react";

interface CreativeProps {
  isCreativesClicked: boolean;
  currentCreativeIndex: number;
  currentCreative: creativeType;
  setIsBackgroundBlurred: (isBlurred: boolean) => void;
  isMobileMenuOpen?: boolean;
}

export const Creative = ({
  isCreativesClicked,
  currentCreativeIndex,
  currentCreative,
  setIsBackgroundBlurred,
  isMobileMenuOpen = false,
}: CreativeProps) => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleHoverChange = (hovered: boolean) => {
    setIsBlurred(hovered);
    setIsBackgroundBlurred(hovered);
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {isCreativesClicked && (
          <CreativeCard
            currentCreativeIndex={currentCreativeIndex}
            backgroundImage={
              creatives[currentCreativeIndex % creatives.length].backgroundImage
              
            }
            isBlurred={isBlurred}
          ></CreativeCard>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isCreativesClicked && !isMobileMenuOpen && (
          <CreativeInfo
            currentCreativeIndex={currentCreativeIndex}
            info={currentCreative.info}
            onHoverChange={handleHoverChange}
          ></CreativeInfo>
        )}
      </AnimatePresence>
    </div>
  );
};
