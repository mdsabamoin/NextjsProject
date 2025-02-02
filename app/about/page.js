import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h1>Welcome to About Page</h1>
      <Link href="/about/developer">Go to DeveloperPage</Link>
    </div>
  );
}
