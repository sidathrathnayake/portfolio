"use client";

import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import { TabMenuItem } from "@/interfaces/tab";

type BackgroundProps = {
  activeTab: TabMenuItem;
};

const TOTAL_VIDEOS = 7;

function getSafeVideoId(id: unknown) {
  return typeof id === "number" && id >= 0 && id < TOTAL_VIDEOS ? id : 0;
}

export default function Background({ activeTab }: BackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);

  const safeId = useMemo(() => getSafeVideoId(activeTab?.id), [activeTab?.id]);
  const videoSrc = `/videos/${safeId}.mp4`;
  const posterSrc = `/videos/posters/${safeId}.jpg`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setIsReady(false);

    const handleCanPlay = async () => {
      setIsReady(true);
      try {
        await video.play();
      } catch {
        // ignore autoplay errors
      }
    };

    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [videoSrc]);

  useEffect(() => {
    const preloadList = [safeId, (safeId + 1) % TOTAL_VIDEOS];

    preloadList.forEach((id) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href = `/videos/${id}.mp4`;
      document.head.appendChild(link);

      setTimeout(() => {
        document.head.removeChild(link);
      }, 5000);
    });
  }, [safeId]);

  return (
    <>
      <Head>
        <link rel="preload" as="video" href={videoSrc} />
      </Head>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#05050a]">
        {!isReady && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${posterSrc}")` }}
          />
        )}

        <video
          ref={videoRef}
          key={videoSrc}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${isReady ? "opacity-100" : "opacity-0"
            }`}
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/45 sm:bg-black/50 lg:bg-black/40" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.42)_100%)]" />

        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at 20% 25%, rgba(236, 72, 153, 0.12), transparent 24%),
              radial-gradient(circle at 75% 30%, rgba(168, 85, 247, 0.12), transparent 26%),
              radial-gradient(circle at 65% 70%, rgba(249, 115, 22, 0.08), transparent 24%),
              radial-gradient(circle at 35% 75%, rgba(250, 204, 21, 0.07), transparent 22%)
            `,
          }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/55" />
      </div>
    </>
  );
}