import { MovieProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const MovieCard: React.FC<MovieProps> = ({ id, titleText, primaryImage, releaseYear }) => {
  return (
    <Link href={`/movie/${id}`} className="block h-[563px]">
      <div>
        <Image 
          className="h-[430px] w-full rounded-md hover:cursor-pointer" 
          
          src={primaryImage?.url || '/default-poster.png'} 
          width={100} 
          height={100} 
         
          alt={titleText.text} 
        />
      </div>
      <div className="flex justify-between py-4">
       
        <p className="text-xl font-bold">{titleText.text}</p>
       
        <p className="text-xl text-[#E2D609]">{releaseYear.year}</p>
      </div>
    </Link>
  );
};

export default MovieCard