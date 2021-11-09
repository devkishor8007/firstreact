import React from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { HiEmojiHappy } from "react-icons/hi";

export default function IntroScreen() {
  return (
    <div className="all">
      <p style={{ color: "white", letterSpacing: "1px" }}>
        Namaste, I'm Kishor Kc <HiEmojiHappy />
      </p>
      <h2 style={{ color: "white", letterSpacing: "1px" }}>
        Learning <FaReact /> and Deploy on <FaGithub />
      </h2>
    </div>
  );
}
