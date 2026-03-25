"use client";

import { useEffect, useRef } from "react";
import { useUser } from "@clerk/nextjs";

export default function AuthSync() {
  const { isLoaded, isSignedIn, user } = useUser();
  const hasSyncedRef = useRef(false);

  useEffect(() => {
    const syncUser = async () => {
      if (!isLoaded || !isSignedIn || !user) return;
      if (hasSyncedRef.current) return;

      try {
        const res = await fetch("/api/auth/sync-user", {
          method: "POST",
        });

        const data = await res.json().catch(() => null);

        if (!res.ok) {
          console.error("User sync failed:", res.status, data);
          return;
        }

        hasSyncedRef.current = true;
        console.log("User synced:", data);
      } catch (error) {
        console.error("Sync request error:", error);
      }
    };

    syncUser();
  }, [isLoaded, isSignedIn, user]);

  return null;
}
