"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/services/api";
import UserForm from "@/components/UserForm";
import Loader from "@/components/Loader";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserDetailPage() {
  const params = useParams();
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await api.get(`/users/${params.id}`);

      setUser(res.data);

      setName(res.data.name);
      setEmail(res.data.email);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedUser = {
        ...user,
        name,
        email,
      };

      await api.put(`/users/${params.id}`, updatedUser);

      setUser(updatedUser as User);

      alert("User updated successfully!");
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this user?");

    if (!confirmDelete) return;

    try {
      await api.delete(`/users/${params.id}`);

      alert("User deleted successfully!");

      router.push("/users");
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return <Loader />;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-5">User Details</h1>

      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-2xl font-semibold">{user.name}</h2>

        <p className="text-gray-600 mt-2">{user.email}</p>

        <div className="flex gap-3 mt-5">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>

      {showForm && (
        <UserForm
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
          onSubmit={handleUpdate}
        />
      )}
    </div>
  );
}
