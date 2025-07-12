export default function Phainon() {
  return (
    <div className="relative w-full overflow-hidden">

      <video
        className="fixed inset-0 z-[-1] w-screen h-screen object-cover opacity-100"
        src="/video/phainonv.mp4" 
        muted
        loop
        autoPlay
        playsInline
      >
      </video>
    </div>   
  );
}