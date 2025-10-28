"use client";
import { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
// @ts-ignore
import "@xterm/xterm/css/xterm.css";

export default function EvolutionLog() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const term = useRef<Terminal | null>(null);

  const logs = [
    { time: "10:02:11", message: "Starting build...", type: "info" },
    { time: "10:02:13", message: "Fetching dependencies...", type: "info" },
    {
      time: "10:02:15",
      message: "Warning: deprecated package found",
      type: "warn",
    },
    {
      time: "10:02:18",
      message: "Build completed successfully ✅",
      type: "success",
    },
  ];

  useEffect(() => {
    if (!terminalRef.current) return;

    term.current = new Terminal({
      theme: {
        background: "#0f1214",
        foreground: "#d1d5db",
        cursor: "#00ff88",
      },
      fontFamily: "Menlo, Monaco, 'Courier New', monospace",
      fontSize: 14,
      cursorBlink: true,
      scrollback: 1000,
    });

    term.current.open(terminalRef.current);
    term.current.writeln(
      "\x1b[32mcyla@system-v1:~$:\x1b[36m~\x1b[0m$ tail -f actions.log"
    );
    term.current.writeln("");

    let index = 0;
    const interval = setInterval(() => {
      if (index >= logs.length) {
        clearInterval(interval);
        return;
      }
      const { time, message, type } = logs[index];
      let color = "\x1b[37m";
      if (type === "warn") color = "\x1b[33m";
      if (type === "error") color = "\x1b[31m";
      if (type === "success") color = "\x1b[32m";
      term.current?.writeln(`${color}[${time}] ${message}\x1b[0m`);
      index++;
    }, 800);

    return () => {
      term.current?.dispose();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="z-20! w-full md:!w-[62%] mx-auto md:my-0! bg-[#0f1214] rounded-lg border !border-[#1a1d1f] shadow-md ">
      <div className="w-full flex items-center gap-2 px-3 py-2 bg-[#1a1d1f] sticky top-0 z-10">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div className="overflow-auto md:overflow-hidden ">
        {/* Terminal top bar */}

        {/* Sticky path header */}

        {/* Scrollable terminal output */}
        <div
          ref={terminalRef}
          className="max-h-[400px]  p-2 font-mono text-gray-200"
        />
      </div>
    </div>
  );
}
