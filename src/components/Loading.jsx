import Lottie from "lottie-react";
import LoadingData from "../assets/loading.json";

export default function Loading() {
  return (
    <div>
      <Lottie animationData={LoadingData}></Lottie>
    </div>
  );
}
