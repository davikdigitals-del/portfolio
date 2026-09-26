import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative">
        {/* Spinning ring */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-gray-200 border-t-blue-500 animate-spin"></div>
        
        {/* Your image in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/ajibola.jpg"
              alt="Ajibola"
              width={56}
              height={56}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        
        {/* Loading text */}
        <div className="mt-4 text-center">
          <p className="text-slate-600 font-medium">Loading...</p>
        </div>
      </div>
    </div>
  );
}