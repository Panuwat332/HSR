import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8  shadow-inner">
      <div className="flex justify-center items-center gap-8">
        <Link
          href="https://discord.com/invite/honkaistarrail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/discord-logo.png"
            alt="Discord"
            width={50}
            height={30}
            className="rounded-lg shadow-xl"
          />
        </Link>

        <Link
          href="https://www.facebook.com/HonkaiStarRail.TH/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/fb.png"
            alt="Facebook"
            width={50}
            height={30}
            className="rounded-lg shadow-xl"
          />
        </Link>

        <Link
          href="https://www.youtube.com/channel/UC2PeMPA8PAOp-bynLoCeMLA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/yt.png"
            alt="ํYoutube"
            width={50}
            height={30}
            className="rounded-lg shadow-xl"
          />
        </Link>

        
      </div>
        <p className="flex justify-center items-center gap-8">
            “PlayStation Family Mark”, “PlayStation” and “PS5 logo” are registered trademarks or trademarks of Sony Interactive Entertainment Inc.
        </p>
        <p className="flex justify-center items-center gap-8">
            Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners.
        </p>
    </footer>
  );
}
