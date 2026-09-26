"use client";

import LoadingSpinner from "./LoadingSpinner";

export default function PreloaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoadingSpinner />
      {children}
    </>
  );
}
