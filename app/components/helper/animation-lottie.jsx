// "use client";

// import Lottie from "lottie-react";

// const AnimationLottie = ({ animationPath, width }) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationPath,
//     style: {
//       width: '95%',
//     }
//   };

//   return (
//     <Lottie {...defaultOptions} />
//   );
// };

// export default AnimationLottie;

"use client";

import dynamic from "next/dynamic";

// Import Lottie dynamically to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  return (
    <Lottie 
      animationData={animationPath} 
      loop={true} 
      autoplay={true} 
      style={{ width: width || '95%' }}
    />
  );
};

export default AnimationLottie;
