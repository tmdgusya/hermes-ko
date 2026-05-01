import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", className = "", children, ...props }, ref) => {
    const variants = {
      default: "bg-card border border-border",
      elevated: "bg-card border border-border shadow-lg shadow-black/20",
      outlined: "bg-transparent border border-border",
    };

    return (
      <div
        ref={ref}
        className={`rounded-[var(--radius-lg)] p-6 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;
