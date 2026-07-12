import Link from "next/link";

export default function NotFound() {
  return (
    <main className="centered">
      <h1>404</h1>
      <p>Sorry, page not found.</p>
      <Link href="/">Go to home page</Link>
    </main>
  );
}

