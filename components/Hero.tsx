"use client";

import { Player } from "@remotion/player";
import { HeroDeviceAssemble } from "./ui/hero-device-assemble";

function Scene() {
  return <HeroDeviceAssemble />;
}

export default function DemoDefault() {
  return (
    /* h-auto yaptık ki içindeki Player ne kadar yer kaplıyorsa o kadar olsun, ekstra boşluk bırakmasın */
    <div className="w-full h-auto md:h-screen overflow-hidden bg-black flex items-center justify-center">
      <div className="w-full h-[300px] sm:h-[400px] md:h-full"> 
        {/* Mobilde yüksekliği 300px ile sınırladık, bilgisayarda tam ekran yaptık */}
        <Player
          component={Scene}
          durationInFrames={240}
          fps={30}
          compositionWidth={1280}
          compositionHeight={720}
          style={{ 
            width: "100%", 
            height: "100%",
            objectFit: "contain" // Resmin bozulmadan kutuya sığmasını sağlar
          }}
          controls={false}
          autoPlay
          loop
          clickToPlay={false}
          acknowledgeRemotionLicense
        />
      </div>
    </div>
  );
}
