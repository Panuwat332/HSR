import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">

      <video
        className="fixed inset-0 z-[-1] w-screen h-screen object-cover opacity-100"
        src="https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/be5f1cc27a611c0e5997a63832d0f8db_47496312031752291.mp4" 
        muted
        loop
        autoPlay
        playsInline
      >
      </video>
      <div className="relative z-[1]">
        <section className="drop-shadow-lg w-48 h-auto sm:w-64 md:w-80 lg:w-96 mb-8 pl-18 pt-20 min-h-screen">
          <Image
            className="drop-shadow-lg w-48 h-auto sm:w-64 md:w-80 lg:w-96 mb-8" 
            src="/img/hsr.png"
            alt="Honkai Star Rail Logo"
            width={500}
            height={150} 
          />
        </section>

        <section className="min-h-screen bg-zinc-900 text-white px-4 py-8 sm:px-8 sm:py-20 flex items-center justify-center">
            <div className="w-full max-w-3xl rounded-xl border-4 border-indigo-950 p-6 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 drop-shadow-lg">
                สำรวจจักรวาลอันกว้างใหญ่
            </h2>
            <p className="text-base sm:text-lg">
                ออกเดินทางไปกับเกมกากๆ
            </p>
            <Image
                src="/img/QR.png"
                alt="QR"
                width={300}
                height={200}
                className="mt-6 sm:mt-8 w-full max-w-[300px] mx-auto rounded-lg shadow-xl"
              />
            </div>
          </section>

      </div>
    </div>
  );
}
