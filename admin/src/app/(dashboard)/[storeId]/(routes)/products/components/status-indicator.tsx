import { Check, X } from "lucide-react";

interface StatusIndicatorProps {
  condition: boolean;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ condition }) => {
  return condition ? (
    <div className="h-6 w-6 rounded-full flex items-center justify-center bg-green-500">
      <Check className="h-4 w-4" />
    </div>
  ) : (
    <div className="h-6 w-6 rounded-full flex items-center justify-center bg-red-500">
      <X className="h-4 w-4" />
    </div>
  );
};
