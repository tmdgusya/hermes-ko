import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", className = "", children, ...props }, ref) => {
    const variants = {
      default: "bg-surface-dark-alt border border-gray-80",
      elevated: "bg-surface-dark-alt border border-gray-80 shadow-lg shadow-black/20",
      outlined: "bg-transparent border border-gray-70",
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
