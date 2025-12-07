import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export default async function Dashboard() {
  const tickets = await db.ticket.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="h-screen w-fit bg-background  relative p-10 overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Ticket Dashboard 🎟️
      </h1>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Age Range</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{ticket.name}</td>
              <td className="p-3">{ticket.email}</td>
              <td className="p-3">{ticket.phone || "-"}</td>
              <td className="p-3">{ticket.ageRange || "-"}</td>
              <td className="p-3">
                {new Date(ticket.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
