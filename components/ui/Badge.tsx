interface BadgeProps {
  variant?: "default" | "success" | "warning" | "destructive" | "info";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant = "default", children, className = "" }: BadgeProps) {
  const variants = {
    default: "bg-muted text-muted-foreground",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    destructive: "bg-destructive/10 text-destructive",
    info: "bg-info/10 text-info",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
