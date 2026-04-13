"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ResultContent() {
  const params = useSearchParams();

  const score = params.get("score");
  const total = params.get("total");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Your Result</h1>
      <h2>{score} / {total}</h2>
    </div>
  );
}

export default function Result() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ResultContent />
    </Suspense>
  );
}