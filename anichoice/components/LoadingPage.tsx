import Image from "next/image";
export default function LoadingPage(){
    return(
        <div className="flex flex-col justify-center items-center w-full h-full">
            <Image
                src="/gifs/anime_running_t_1.gif"
                alt="Loading Image"
                width={0}
                height={0}
                className="w-48 h-auto"
            />
            <p className="text-2xl text-[#ffb0f4] font-bold mt-4">Loading...</p>
        </div>
    )
}
