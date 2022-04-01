import React from "react";

export default function Table({ data }) {
  return (
    <table className="w-full">
      <tbody>
        <tr className="bg-purple-100">
          <th className="py-2 font-semibold">Name</th>
          <th className="py-2 font-semibold">Surname</th>
          <th className="py-2 font-semibold">E-mail</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="pl-2 py-1 text-sm">{item.first_name}</td>
            <td className="pl-2 text-sm">{item.last_name}</td>
            <td className="pl-2 text-sm">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
