import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome To HomePage</h1>
      <Link href="/news">Go to NewsPage</Link>
    </div>
  );
}
