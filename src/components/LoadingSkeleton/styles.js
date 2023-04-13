import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
 from {background-color: #f0f0f0;}
  to {background-color: #d0d0d0;}
`;

export const SkeletonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 380px;
  height: 250px;
  margin-bottom: 20px;
  border-radius: 20px;
   background: #222;
  background-size: 400% 400%;
  animation: ${skeletonAnimation} 1s ease infinite alternate;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    height: 150px;
    width: 100%;
    padding: 20px;
  }
`

export const SkeletonCircle = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-color: #f0f0f0;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);

  animation: ${skeletonAnimation} 2s ease-in-out infinite alternate;
`

export const SkeletonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  height: 100px;

  @media (min-width: 768px) {
    text-align: start;
  }
`

export const SkeletonLineName = styled.div`
  width: 150px;
  height: 20px;
  background-color: #f0f0f0;
  margin: 5px 0px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  animation: ${skeletonAnimation} 2s ease-in-out infinite alternate;
`

export const SkeletonLineEmail = styled.div`
  width: 180px;
  height: 20px;
  background-color: #f0f0f0;
  margin: 5px 0px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  animation: ${skeletonAnimation} 2s ease-in-out infinite alternate;
`
