interface Props {
  name: string;
  email: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  onSubmit: () => void;
}

export default function UserForm({
  name,
  email,
  setName,
  setEmail,
  onSubmit,
}: Props) {
  return (
    <div className="bg-white p-5 rounded shadow mt-5">
      <div className="mb-4">
        <label className="block mb-1">Name</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        onClick={onSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  );
}
