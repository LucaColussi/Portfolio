"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => null;

export function CurrentYear() {
  // Read the browser clock after hydration so static builds never freeze the year.
  const year = useSyncExternalStore(subscribe, getYear, getServerYear);

  return year;
}
