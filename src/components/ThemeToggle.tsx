import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "none",
        border: "none",
        borderRadius: "22px",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        cursor: "pointer",
        transition: "background 0.3s",
        padding: 0,
      }}
    >
      {theme === "dark" ? (
        <Moon
          size={22}
          color={hover ? "#4ade80" : "#fff"}
          style={{
            transition: "color 0.2s, transform 0.2s",
            transform: hover ? "scale(1.15) rotate(-10deg)" : "scale(1) rotate(0deg)",
          }}
        />
      ) : (
        <Sun
          size={22}
          color={hover ? "#fbbf24" : "#f7b731"}
          style={{
            transition: "color 0.2s, transform 0.2s",
            transform: hover ? "scale(1.15) rotate(10deg)" : "scale(1) rotate(0deg)",
          }}
        />
      )}
    </button>
  );
};
