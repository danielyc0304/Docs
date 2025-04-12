import { LoaderIcon } from "lucide-react";

interface FullscreenLoaderProps {
  label?: string;
}

export const FullscreenLoader = ({ label }: FullscreenLoaderProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <LoaderIcon className="text-muted-foreground size-6 animate-spin" />

      {label && <p className="text-muted-foreground text-sm">{label}</p>}
    </div>
  );
};
