import Link from "next/link";

export default function NewsPage() {
  return (
    <div>
      <h1>Welcome To News Page</h1>
      <Link href="/about">Go to About</Link>
    </div>
  );
}
