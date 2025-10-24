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
  revealDuration = 0.3,
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
    let progress = 0;
    const totalSteps = chars.length;
    const scrambleStepTime = (scrambleDuration * 1000) / totalSteps;
    const revealStepTime = (revealDuration * 1000) / totalSteps;

    setDisplayChars(Array.from(chars, (char) => (char.trim() === "" ? char : getRandomChar())));

    // Scramble initial text quickly for `scrambleDuration`
    intervalRef.current = setInterval(() => {
      setDisplayChars((prev) =>
        prev.map((char, idx) =>
          chars[idx].trim() === "" ? chars[idx] : getRandomChar()
        )
      );
    }, 75);

    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      let currentProgress = 0;
      let revealInterval: NodeJS.Timeout | null = null;
      // Reveal left to right one by one
      revealInterval = setInterval(() => {
        setDisplayChars((prev) =>
          prev.map((char, idx) =>
            idx <= currentProgress
              ? chars[idx]
              : chars[idx].trim() === "" ? chars[idx] : getRandomChar()
          )
        );
        currentProgress += 1;
        if (currentProgress >= chars.length) {
          if (revealInterval) clearInterval(revealInterval);
          setDisplayChars(chars);
        }
      }, revealStepTime);
    }, scrambleDuration * 1000);
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
