import { useState } from "react";
import { Users } from "./users";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="mt-20 mx-auto px-2 w-full flex flex-col justify-center items-center font-poppins">
      <h1 className="text-3xl font-bold mb-12">Basic search filter by KH</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border-2 border-purple-500 outline-none focus:border-purple-700 rounded-xl px-4 py-2 mb-8"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
