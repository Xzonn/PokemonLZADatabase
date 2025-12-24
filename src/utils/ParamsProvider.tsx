"use client";

import React, { createContext, useContext } from "react";

const ParamsContext = createContext<Record<string, string>>({});

export function ParamsProvider({ children, params }: { children: React.ReactNode; params: Record<string, string> }) {
  return <ParamsContext.Provider value={params}>{children}</ParamsContext.Provider>;
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string>>(): T {
  return useContext(ParamsContext) as T;
}
