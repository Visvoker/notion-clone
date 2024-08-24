import Image from "next/image";


export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px]">
          <Image
            src="/Pig.gif"
            fill
            className="object-contain"
            alt="Documents"
          />
        </div>
        <div className="relative w-[250px] h-[250px] md:block" >
          <Image
            src="/Ribbon Pig.gif"
            fill
            className="object-contain"
            alt="Reading"
          />
        </div>
      </div>
      <div>
      <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px]">
          <Image
            src="/Pig.gif"
            fill
            className="object-contain"
            alt="Documents"
          />
        </div>
      </div>
    </div>
  )
};