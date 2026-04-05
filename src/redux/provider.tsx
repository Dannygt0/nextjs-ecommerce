"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import React from "react";
import Title from '@/components/SubComponent/Title';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
