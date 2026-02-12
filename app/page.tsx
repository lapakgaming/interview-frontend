import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>LapakGaming – Interview</h1>
      <p>
        <strong>Task:</strong> Build the Product Detail Page (PDP).
      </p>
      <p>
        <Link href="/products/game-123">→ Go to PDP (product: game-123)</Link>
      </p>
    </main>
  );
}
