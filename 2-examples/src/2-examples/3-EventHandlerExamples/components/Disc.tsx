import React from "react";

interface DiscProps {
  imageUrl: string;
  playing: boolean;
}

function Disc({ imageUrl, playing }: DiscProps) {
  return (
    <div>
      <div
        className={playing ? "music_disc_rotation" : undefined}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          height: 300,
          width: 300,
          borderRadius: "50%",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            height: 60,
            width: 60,
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Disc;
