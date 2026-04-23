"use client";

import { Player } from "@remotion/player";
import { HeroDeviceAssemble } from "./ui/hero-device-assemble";

function Scene() {
  return <HeroDeviceAssemble />;
}

export default function DemoDefault() {
  return (
    <div className="w-full h-[50vh] md:h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Mobilde scale-[1.7] ile %170 yakınlaştırdık (zoom in). 
        Tabletlerde (sm) %125, bilgisayarda (md) ise normal (%100) boyutunda çalışacak.
        origin-center ile tam merkezden büyümesini sağladık.
      */}
      <div className="w-full h-full flex items-center justify-center transform scale-[1.7] sm:scale-125 md:scale-100 origin-center"> 
        <Player
          component={Scene}
          durationInFrames={240}
          fps={30}
          compositionWidth={1280}
          compositionHeight={720}
          style={{ 
            width: "100%", 
            height: "100%",
            objectFit: "contain" 
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