interface AvatarProps {
  src?: string | null;
  name?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Avatar({ src, name, size = "md", className = "" }: AvatarProps) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
  };

  const initials = name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`relative rounded-full overflow-hidden flex items-center justify-center bg-primary/20 text-primary font-medium ${sizes[size]} ${className}`}
    >
      {src ? (
        <img src={src} alt={name || "Avatar"} className="w-full h-full object-cover" />
      ) : (
        <span>{initials || "?"}</span>
      )}
    </div>
  );
}
