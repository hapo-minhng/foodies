import Link from "next/link";

export default function MealDetails() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meal Details</h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
    </main>
  );
}
