"use client";

import Typewriter from 'typewriter-effect';

export default function WritterPhrase() {
  return (
    <div className=" font-bold text-white text-[clamp(18px,1.5vw,27px)] text-center [text-shadow:0_0_20px_white]">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('"No he fallado. Solo he encontrado 10.000 formas que no funcionan." <br/> <span class="text-gray-text text-[clamp(13px,1vw,18px)]">-Thomas Edison</span>')
            .start();
        }}
        options={{
          delay: 20,
          cursor: '|'
        }}
      />
    </div>
  );
}