import Link from "next/link";

interface UserProps {
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export default function UserCard({ user }: UserProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{user.name}</h2>

      <p className="text-gray-600">{user.email}</p>

      <Link
        href={`/users/${user.id}`}
        className="inline-block mt-3 bg-blue-500 text-white px-4 py-2 rounded"
      >
        View
      </Link>
    </div>
  );
}
