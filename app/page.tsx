import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link href="/users" className="bg-blue-500 text-white px-6 py-3 rounded">
        Go To Users
      </Link>
    </div>
  );
}
