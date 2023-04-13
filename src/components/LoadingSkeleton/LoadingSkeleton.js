import React from "react";
import { SkeletonBox, SkeletonCircle, SkeletonInfo, SkeletonLineName, SkeletonLineEmail } from "./styles";

const LoadingSkeleton = ({count}) => {
  const skeletonsCount = Array.from({length: count}).map((_, index) => (
    <SkeletonBox key={index}>
      <SkeletonCircle />

      <SkeletonInfo>
        <SkeletonLineName />
        <SkeletonLineEmail />
      </SkeletonInfo>
    </SkeletonBox>
  ))

  return skeletonsCount;
};

export { LoadingSkeleton }