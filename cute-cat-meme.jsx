import { useState, useEffect } from "react";

const catFaces = [
  { eyes: "◉ ◉", mouth: "ω", ears: "∧ ∧", mood: "Happy", bg: "#FFF5E6", accent: "#FF6B35", blush: true },
  { eyes: "≧ ≦", mouth: "▽", ears: "∧ ∧", mood: "Excited", bg: "#E8F5E9", accent: "#4CAF50", blush: true },
  { eyes: "◕ ◕", mouth: "з", ears: "∧ ∧", mood: "Kissy", bg: "#FCE4EC", accent: "#E91E63", blush: true },
  { eyes: "– –", mouth: "ω", ears: "∧ ∧", mood: "Sleepy", bg: "#E8EAF6", accent: "#5C6BC0", blush: false },
  { eyes: "◉ ◉", mouth: "△", ears: "∧ ∧", mood: "Surprised", bg: "#FFF3E0", accent: "#FF9800", blush: false },
  { eyes: "♥ ♥", mouth: "ω", ears: "∧ ∧", mood: "In Love", bg: "#F8BBD0", accent: "#D81B60", blush: true },
  { eyes: "╥ ╥", mouth: "﹏", ears: "∧ ∧", mood: "Sad", bg: "#E3F2FD", accent: "#42A5F5", blush: false },
  { eyes: "⊙ ⊙", mouth: "Д", ears: "∧ ∧", mood: "Shocked", bg: "#FFFDE7", accent: "#FDD835", blush: false },
];

const captions = [
  "I can haz cheeseburger?",
  "Hooman, feed me NOW",
  "If I fits, I sits",
  "Not today, hooman",
  "Did someone say treats?",
  "I pushed it off the table. On purpose.",
  "Pet me. No wait, don't.",
  "I'm not fat, I'm fluffy!",
  "This is MY box now",
  "3 AM zoomies activated",
];

const Sparkle = ({ x, y, delay, size = 14 }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      fontSize: size,
      animationDelay: `${delay}s`,
      animation: "sparkle 1.5s ease-in-out infinite",
      pointerEvents: "none",
      zIndex: 1,
    }}
  >
    ✦
  </div>
);

const FloatingHeart = ({ x, delay }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      bottom: 0,
      fontSize: 18,
      animation: "floatUp 3s ease-out infinite",
      animationDelay: `${delay}s`,
      opacity: 0,
      pointerEvents: "none",
    }}
  >
    ♥
  </div>
);

export default function CuteCatMeme() {
  const [catIndex, setCatIndex] = useState(0);
  const [caption, setCaption] = useState(captions[0]);
  const [petCount, setPetCount] = useState(0);
  const [showPurr, setShowPurr] = useState(false);
  const [bounce, setBounce] = useState(false);
  const [wiggle, setWiggle] = useState(false);

  const cat = catFaces[catIndex];

  const randomize = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 500);
    setCatIndex(Math.floor(Math.random() * catFaces.length));
    setCaption(captions[Math.floor(Math.random() * captions.length)]);
  };

  const petCat = () => {
    setPetCount((p) => p + 1);
    setShowPurr(true);
    setWiggle(true);
    setTimeout(() => setShowPurr(false), 1200);
    setTimeout(() => setWiggle(false), 400);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${cat.bg} 0%, #fff 50%, ${cat.bg} 100%)`,
        transition: "background 0.6s ease",
        fontFamily: "'Trebuchet MS', 'Comic Sans MS', cursive",
        overflow: "hidden",
        padding: 20,
      }}
    >
      <style>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }
        @keyframes floatUp {
          0% { opacity: 0.8; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-120px) scale(0.5); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          40% { transform: translateY(-30px); }
          60% { transform: translateY(-15px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        @keyframes purrPulse {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          30% { opacity: 1; transform: scale(1.1); }
          70% { opacity: 1; transform: scale(1); }
        }
        @keyframes tailWag {
          0%, 100% { transform: rotate(-20deg); }
          50% { transform: rotate(20deg); }
        }
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
      `}</style>

      <div style={{ position: "relative", maxWidth: 400, width: "100%" }}>
        {/* Sparkles */}
        <Sparkle x="10%" y="5%" delay={0} />
        <Sparkle x="85%" y="10%" delay={0.5} />
        <Sparkle x="5%" y="70%" delay={1} />
        <Sparkle x="90%" y="65%" delay={1.5} />
        <Sparkle x="50%" y="2%" delay={0.8} size={10} />

        {/* Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 28,
            padding: "36px 28px 28px",
            boxShadow: `0 20px 60px ${cat.accent}22, 0 4px 20px rgba(0,0,0,0.06)`,
            border: `3px solid ${cat.accent}33`,
            position: "relative",
            overflow: "hidden",
            transition: "box-shadow 0.4s ease, border-color 0.4s ease",
          }}
        >
          {/* Top ribbon */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 6,
              background: `linear-gradient(90deg, ${cat.accent}, ${cat.accent}88, ${cat.accent})`,
              borderRadius: "28px 28px 0 0",
            }}
          />

          {/* Mood badge */}
          <div
            style={{
              display: "inline-block",
              background: `${cat.accent}18`,
              color: cat.accent,
              padding: "4px 14px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {cat.mood} kitty
          </div>

          {/* Cat face */}
          <div
            onClick={petCat}
            style={{
              cursor: "pointer",
              userSelect: "none",
              textAlign: "center",
              position: "relative",
              animation: bounce
                ? "bounce 0.5s ease"
                : wiggle
                ? "wiggle 0.4s ease"
                : "none",
            }}
          >
            {/* Purr effect */}
            {showPurr && (
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: 16,
                  color: cat.accent,
                  fontWeight: 700,
                  animation: "purrPulse 1.2s ease-out forwards",
                  whiteSpace: "nowrap",
                }}
              >
                purrr~ ♡
              </div>
            )}

            {/* Ears */}
            <div style={{ fontSize: 42, lineHeight: 1, color: cat.accent, letterSpacing: 40, marginBottom: -10 }}>
              {cat.ears}
            </div>

            {/* Head shape */}
            <div
              style={{
                background: `${cat.accent}10`,
                borderRadius: "50%",
                width: 180,
                height: 160,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                border: `2px solid ${cat.accent}20`,
              }}
            >
              {/* Whiskers left */}
              <div style={{ position: "absolute", left: -20, top: "55%", fontSize: 11, color: cat.accent + "66", letterSpacing: 2 }}>
                ═══
              </div>
              {/* Whiskers right */}
              <div style={{ position: "absolute", right: -20, top: "55%", fontSize: 11, color: cat.accent + "66", letterSpacing: 2 }}>
                ═══
              </div>

              {/* Eyes */}
              <div
                style={{
                  fontSize: 36,
                  letterSpacing: 16,
                  animation: "blink 4s infinite",
                  color: "#333",
                }}
              >
                {cat.eyes}
              </div>

              {/* Blush */}
              {cat.blush && (
                <div style={{ display: "flex", gap: 60, marginTop: -2 }}>
                  <div style={{ width: 20, height: 12, borderRadius: "50%", background: `${cat.accent}30` }} />
                  <div style={{ width: 20, height: 12, borderRadius: "50%", background: `${cat.accent}30` }} />
                </div>
              )}

              {/* Nose + Mouth */}
              <div style={{ fontSize: 10, color: cat.accent, marginTop: 2 }}>▼</div>
              <div style={{ fontSize: 30, marginTop: -4, color: "#555" }}>{cat.mouth}</div>
            </div>

            {/* Paws */}
            <div style={{ fontSize: 22, marginTop: -6, letterSpacing: 40, color: cat.accent + "88" }}>
              ☾ ☽
            </div>

            {/* Tail */}
            <div
              style={{
                position: "absolute",
                right: 40,
                bottom: 10,
                fontSize: 36,
                color: cat.accent + "66",
                animation: "tailWag 1s ease-in-out infinite",
                transformOrigin: "bottom center",
              }}
            >
              ∿
            </div>

            {/* Floating hearts on pet */}
            {petCount > 0 && (
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <FloatingHeart x="20%" delay={0} />
                <FloatingHeart x="50%" delay={0.3} />
                <FloatingHeart x="75%" delay={0.6} />
              </div>
            )}
          </div>

          {/* Caption bubble */}
          <div
            style={{
              marginTop: 24,
              background: `${cat.accent}0C`,
              borderRadius: 20,
              padding: "14px 20px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: `8px solid ${cat.accent}0C`,
              }}
            />
            <p style={{ margin: 0, fontSize: 18, color: "#444", fontWeight: 600, fontStyle: "italic" }}>
              "{caption}"
            </p>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <button
              onClick={randomize}
              style={{
                flex: 1,
                padding: "12px 0",
                borderRadius: 16,
                border: "none",
                background: cat.accent,
                color: "#fff",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                boxShadow: `0 4px 14px ${cat.accent}44`,
              }}
              onMouseDown={(e) => (e.target.style.transform = "scale(0.96)")}
              onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
            >
              🎲 New Meme
            </button>
            <button
              onClick={petCat}
              style={{
                flex: 1,
                padding: "12px 0",
                borderRadius: 16,
                border: `2px solid ${cat.accent}33`,
                background: "transparent",
                color: cat.accent,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "transform 0.15s ease",
              }}
              onMouseDown={(e) => (e.target.style.transform = "scale(0.96)")}
              onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
            >
              🐾 Pet ({petCount})
            </button>
          </div>

          {/* Pet milestone */}
          {petCount >= 10 && (
            <div style={{ textAlign: "center", marginTop: 12, fontSize: 13, color: cat.accent, fontWeight: 600 }}>
              {petCount >= 50 ? "🏆 Crazy Cat Person!" : petCount >= 25 ? "😻 Cat Whisperer!" : "💕 Kitty loves you!"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
