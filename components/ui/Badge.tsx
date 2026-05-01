interface BadgeProps {
  variant?: "default" | "success" | "warning" | "error" | "info";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant = "default", children, className = "" }: BadgeProps) {
  const variants = {
    default: "bg-gray-80 text-text-secondary",
    success: "bg-success-surface/10 text-success",
    warning: "bg-warning-surface/10 text-warning",
    error: "bg-error-surface/10 text-error",
    info: "bg-info-surface/10 text-info",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-[var(--radius-pill)] text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
