"use client";

export function JacquardLoom() {
  const cards = [
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0, 0],
  ];

  return (
    <div className="pointer-events-none relative h-80 w-full overflow-hidden bg-transparent mt-20">
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.12))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.12))",
        }}
      >
        <div className="absolute left-1/2 top-6 h-72 w-72 -translate-x-1/2">
          {/* simplified lace machine outline */}
          <div className="absolute left-1/2 top-20 h-32 w-56 -translate-x-1/2 rounded-t-full border border-white/70" />
          <div className="absolute left-1/2 top-36 h-20 w-64 -translate-x-1/2 rounded-md border border-white/50" />
          <div className="absolute left-10 top-52 h-16 border-l border-white/50" />
          <div className="absolute right-10 top-52 h-16 border-l border-white/50" />
          <div className="absolute bottom-3 left-6 right-6 border-t border-white/50" />

          {/* card feed rail */}
          <div className="absolute left-1/2 top-10 h-40 border-l border-dashed border-white/40" />

          {/* punched cards */}
          <div className="absolute left-1/2 top-0 flex -translate-x-1/2 flex-col gap-2">
            {cards.map((pattern, cardIndex) => (
              <div
                key={cardIndex}
                className="relative h-12 w-28 rounded-md border border-white/75 bg-transparent p-2"
              >
                <div className="grid grid-cols-6 gap-1.5">
                  {pattern.map((filled, i) => (
                    <div
                      key={i}
                      className={[
                        "h-2.5 rounded-full border border-white/60",
                        filled ? "bg-white/75" : "bg-transparent",
                      ].join(" ")}
                    />
                  ))}
                </div>

                {/* small connector tabs */}
                <div className="absolute -top-1 left-4 h-2 w-2 rounded-full border border-white/50" />
                <div className="absolute -top-1 right-4 h-2 w-2 rounded-full border border-white/50" />
              </div>
            ))}
          </div>

          {/* thread / lace lines */}
          <div className="absolute left-1/2 top-44 h-20 w-40 -translate-x-1/2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 h-20 border-l border-white/30"
                style={{ left: `${i * 16.5}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}