import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PwaInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setCanInstall(false);
    }
  };

  if (!canInstall) return null;

  return (
    <Button
      onClick={handleInstallClick}
      size="sm"
      className="fixed bottom-20 left-4 z-50 bg-primary text-primary-foreground shadow-2xl rounded-full text-xs gap-2 border border-primary/30 animate-bounce"
    >
      <Download className="w-3.5 h-3.5" /> Install App
    </Button>
  );
}