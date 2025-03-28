"use client";
import WishComp from "@/app/wish/WishComp";
import { Suspense } from "react";

export default function Provider() {
  return (
    <Suspense>
      <WishComp />
    </Suspense>
  );
}
