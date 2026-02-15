"use client";

export const safeGetCookie = (name: string) => {
  try {
    const parts = document.cookie.split(";").map((part) => part.trim());
    const match = parts.find((part) => part.startsWith(`${name}=`));
    if (!match) return "";
    return decodeURIComponent(match.slice(name.length + 1));
  } catch {
    return "";
  }
};

export const trackWhenReady = (
  fn: (tracker: NonNullable<Window["InsightsTracker"]>) => void,
  opts?: { timeoutMs?: number }
) => {
  const timeoutMs = opts?.timeoutMs ?? 2000;
  const start = Date.now();
  const tick = () => {
    const tracker = window.InsightsTracker;
    if (tracker) {
      fn(tracker);
      return;
    }
    if (Date.now() - start > timeoutMs) return;
    setTimeout(tick, 100);
  };
  tick();
};

const sessionScopedKey = (baseKey: string, sessionId: string) =>
  sessionId ? `${baseKey}_${sessionId}` : baseKey;

export const hasSessionFlag = (baseKey: string, sessionId: string) => {
  try {
    if (sessionStorage.getItem(baseKey)) return true;
    if (sessionId && sessionStorage.getItem(sessionScopedKey(baseKey, sessionId))) return true;
    return false;
  } catch {
    return false;
  }
};

export const setSessionFlag = (baseKey: string, sessionId: string) => {
  try {
    sessionStorage.setItem(baseKey, "1");
    if (sessionId) sessionStorage.setItem(sessionScopedKey(baseKey, sessionId), "1");
  } catch {
    // ignore
  }
};

