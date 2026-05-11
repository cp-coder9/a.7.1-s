import { ShieldCheck, ShieldAlert } from "lucide-react";
export function VerificationBadge({ verified }: { verified: boolean }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-mint/25 bg-mint/10 px-2.5 py-1 text-xs text-mint-pale">
      {verified ? (
        <ShieldCheck className="size-3" />
      ) : (
        <ShieldAlert className="size-3" />
      )}
      {verified ? "Verified" : "Verification required"}
    </span>
  );
}
