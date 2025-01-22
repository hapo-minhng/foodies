import Link from "next/link";

export default function Share() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Share</h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
    </main>
  );
}
