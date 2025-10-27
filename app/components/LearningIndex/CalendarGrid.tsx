"use client";
import React, { useEffect, useState } from "react";

interface Recap {
  day: number;
  title: string;
  description: string;
}

const CalendarGrid: React.FC = () => {
  const [recaps, setRecaps] = useState<Recap[]>([]);
  const [selectedRecap, setSelectedRecap] = useState<Recap | null>(null); // <-- modal state

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  useEffect(() => {
    const fetchRecaps = async () => {
      try {
        const response = await fetch("/data/recaps.json");
        const data = await response.json();
        setRecaps(data);
      } catch (error) {
        console.error("Error loading recaps:", error);
      }
    };
    fetchRecaps();
  }, []);

  return (
    <>
      <main className="flex items-start justify-center p-8 w-full h-auto mb-20">
        <section
          className="
            grid gap-4 w-full max-w-[1200px] 
            grid-cols-2 md:grid-cols-4! lg:grid-cols-7!
            auto-rows-auto
          "
        >
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const recap = recaps.find((r) => r.day === day);

            const isFilled = !!recap;

            return (
              <div
                key={day}
                className={`
                  relative rounded-[14px] border p-4 h-[220px] cursor-pointer
                  transition-all ease-in-out duration-200
                  ${isFilled
                    ? "hover:scale-[1.03] hover:shadow-[0_0_12px_rgba(255,122,0,0.4)]"
                    : "opacity-50 hover:opacity-80"}
                `}
                style={{
                  borderColor: "rgba(255, 122, 0, 0.38)",
                  backgroundImage:
                    "radial-gradient(rgba(255, 122, 0, 0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(10,10,10,0.85), rgba(10,10,10,0.68))",
                  backgroundSize: "10px 10px, auto",
                  backgroundPosition: "0 0, 0 0",
                }}
                onClick={() => recap && setSelectedRecap(recap)} // <-- open modal
              >
                {/* Day Number */}
                <span className="absolute top-2 left-3 text-[20px] text-[#FF7A00] opacity-90 font-semibold">
                  {day}
                </span>

                {/* Recap Content */}
                {isFilled ? (
                  <div className="absolute bottom-3 left-3 right-3 space-y-1">
                    <h3 className="text-[#FF7A00] font-semibold text-[15px] leading-tight">
                      {recap.title}
                    </h3>
                    <p className="text-[#E6E6E6] text-[13px] leading-snug opacity-90">
                      {recap.description.length > 90
                        ? recap.description.slice(0, 90) + "..."
                        : recap.description}
                    </p>
                  </div>
                ) : (
                  <div className="absolute bottom-4 left-3 right-3 text-[12px] text-gray-400 italic">
                    No recap yet
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </main>

      {/* Modal */}
      {selectedRecap && (
        <div
          className="fixed  inset-0 flex items-center justify-center bg-black/70 z-50"
          onClick={() => setSelectedRecap(null)}
          
        >
          <div
            className="bg-[#111111] rounded-xl p-6 max-w-md w-[90%] text-white relative border border-[#FF7A00]/40"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          style={{
                  borderColor: "rgba(255, 122, 0, 0.38)",
                  backgroundImage:
                    "radial-gradient(rgba(255, 122, 0, 0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(10,10,10,0.85), rgba(10,10,10,0.68))",
                  backgroundSize: "10px 10px, auto",
                  backgroundPosition: "0 0, 0 0",
                }}
          >
            <button
              onClick={() => setSelectedRecap(null)}
              className="absolute top-3 right-4 text-[#FF7A00]! text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-[#FF7A00] text-lg font-semibold mb-3">
              {selectedRecap.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {selectedRecap.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CalendarGrid;
