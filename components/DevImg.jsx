import Image from "next/image";

function DevImg({ containerStyles, imgSrc }) {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} alt="img" fill priority />
    </div>
  );
}

export default DevImg;
