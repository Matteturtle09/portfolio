"use client";

import { useEffect, useState } from "react";

interface GlitchTypewriterProps {
  words: string[];
  speed?: number;
  glitchSpeed?: number;
  delayBetweenWords?: number;
  cursor?: boolean;
  cursorChar?: string;
  delay?: number;
}

const RANDOM_CHARS = "_!X$0-+*#";

function getRandomChar(prevChar?: string): string {
  let char: string;
  do {
    char = RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
  } while (char === prevChar);
  return char;
}

export function GlitchTypewriter({
  words,
  speed = 100,
  glitchSpeed = 15,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = "|",
  delay = 0.5,
}: GlitchTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const [isGlitching, setIsGlitching] = useState(true);
  const [glitchPhase, setGlitchPhase] = useState<"phase1" | "phase2">("phase1");
  const [glitchStep, setGlitchStep] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const currentWord = words[wordIndex];
  const firstWord = words[0];

  useEffect(() => {
    if (delay <= 0) {
      setHasStarted(true);
      return;
    }
    const t = setTimeout(() => setHasStarted(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted || !isGlitching) return;

    const interval = setInterval(() => {
      if (glitchPhase === "phase1") {
        const maxSteps = firstWord.length * 2;
        const currentLength = Math.min(glitchStep + 1, firstWord.length);

        const chars: string[] = [];
        for (let i = 0; i < currentLength; i++) {
          chars.push(getRandomChar(chars[i - 1]));
        }
        for (let i = currentLength; i < firstWord.length; i++) {
          chars.push("\u00A0");
        }

        setDisplayText(chars.join(""));

        if (glitchStep < maxSteps - 1) {
          setGlitchStep((prev) => prev + 1);
        } else {
          setGlitchPhase("phase2");
          setGlitchStep(0);
        }
      } else {
        const revealedCount = Math.floor(glitchStep / 2);
        const chars: string[] = [];

        for (let i = 0; i < revealedCount && i < firstWord.length; i++) {
          chars.push(firstWord[i]);
        }

        if (revealedCount < firstWord.length) {
          if (glitchStep % 2 === 0) {
            chars.push("_");
          } else {
            chars.push(getRandomChar());
          }
        }

        for (let i = chars.length; i < firstWord.length; i++) {
          chars.push(getRandomChar());
        }

        setDisplayText(chars.join(""));

        if (glitchStep < firstWord.length * 2 - 1) {
          setGlitchStep((prev) => prev + 1);
        } else {
          setDisplayText(firstWord);
          setCharIndex(firstWord.length);
          setIsGlitching(false);
        }
      }
    }, glitchSpeed);

    return () => clearInterval(interval);
  }, [hasStarted, isGlitching, glitchPhase, glitchStep, firstWord, glitchSpeed]);

  useEffect(() => {
    if (!hasStarted || isGlitching) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => {
              setIsDeleting(true);
            }, delayBetweenWords);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentWord.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [hasStarted, isGlitching, charIndex, currentWord, isDeleting, speed, delayBetweenWords, words]);

  useEffect(() => {
    if (!cursor) return;
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, [cursor]);

  return (
    <div className="inline-block font-mono">
      <span>
        {displayText}
        {cursor && (
          <span
            className="ml-1 transition-opacity duration-75 font-sans"
            style={{ opacity: showCursor ? 1 : 0 }}
          >
            {cursorChar}
          </span>
        )}
      </span>
    </div>
  );
}