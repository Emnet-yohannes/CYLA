"use client";

import React, {
  useState,
  useRef,
  useEffect,
  cloneElement,
  isValidElement,
} from "react";

interface TextScrambleProps {
  children: React.ReactNode;
  className?: string;
  scrambleDuration?: number;
  revealDuration?: number;
  hoveringColor?: string;
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export function TextScramble({
  children,
  className = "",
  scrambleDuration = 0.2,
  revealDuration = 2,
  hoveringColor = "black",
}: TextScrambleProps) {
  const [displayChars, setDisplayChars] = useState<string[]>([]);
  const [originalChars, setOriginalChars] = useState<string[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [textWidth, setTextWidth] = useState<number | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomChar = () =>
    CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (isValidElement(node))
      return extractText(
        (node as React.ReactElement<{ children?: React.ReactNode }>).props
          .children
      );
    return "";
  };

  // Animates text reveal from left to right
const scrambleRevealLeftToRight = (text: string) => {
  if (intervalRef.current) clearInterval(intervalRef.current);
  if (timeoutRef.current) clearTimeout(timeoutRef.current);

  const chars = text.split("");
  const delayBetweenChars = 60; // ⏳ delay between each character’s appearance
  const scrambleSpeed = 12; // speed of scramble flicker per char (ms)
  const scrambleFrames = 8; // number of random frames before revealing

  // Initially hide all letters (keep spaces visible)
  setDisplayChars(chars.map((char) => (char.trim() === "" ? char : " ")));

  // For each letter, schedule its appearance + scramble
  chars.forEach((char, index) => {
    if (char.trim() === "") return; // skip spaces

    setTimeout(() => {
      let frame = 0;

      const scrambleInterval = setInterval(() => {
        setDisplayChars((prev) => {
          const updated = [...prev];
          // While scrambling, replace with random char
          updated[index] =
            frame < scrambleFrames ? getRandomChar() : chars[index];
          return updated;
        });

        frame++;

        // Stop scrambling once done
        if (frame > scrambleFrames) {
          clearInterval(scrambleInterval);
          setDisplayChars((prev) => {
            const updated = [...prev];
            updated[index] = chars[index];
            return updated;
          });
        }
      }, scrambleSpeed);
    }, index * delayBetweenChars); // stagger each letter’s start
  });
};



  const handleMouseEnter = () => {
    setIsHovering(true);
    scrambleRevealLeftToRight(originalChars.join(""));
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setDisplayChars(originalChars);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    const text = extractText(children);
    const chars = text.split("");
    setOriginalChars(chars);
    setDisplayChars(chars);
  }, [children]);

  useEffect(() => {
    if (measureRef.current) {
      setTextWidth(measureRef.current.offsetWidth);
    }
  }, [originalChars.join("")]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const replaceTextNodes = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      return (
        <span
          className={`transition-colors duration-75 inline-block font-nb-architekt ${className}`}
          style={{
            color: isHovering ? hoveringColor : "#FF7A00",
            width: textWidth ? `${textWidth}px` : "auto",
            whiteSpace: "pre",
            display: "inline-block",
            textAlign: "left",
          }}
        >
          {displayChars.join("")}
        </span>
      );
    }
    if (Array.isArray(node)) return node.map(replaceTextNodes);
    if (isValidElement(node))
      return cloneElement(node, {
        ...(node.props as any),
        children: replaceTextNodes((node.props as any).children),
      });
    return node;
  };

  const wrapped = replaceTextNodes(children);

  return (
    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {wrapped}
      <span
        ref={measureRef}
        className="invisible absolute whitespace-pre font-nb-architekt"
      >
        {originalChars.join("")}
      </span>
    </span>
  );
}
