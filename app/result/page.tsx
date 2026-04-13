"use client";

export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";

export default function Result() {
  const params = useSearchParams();

  if (!params) return null;

  const score = params.get("score");
  const total = params.get("total");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Your Result</h1>
      <h2>{score} / {total}</h2>
    </div>
  );
}