import { Filter, Search } from "lucide-react";

const PaymentStatusTable = () => {
  const payment = [
    {
      id: "johndoe123",
      category: "UI/UX Design",
      class: "Belajar Web Designer dengan Figma",
      status: "SUDAH BAYAR",
      methode: "Credit Card",
      date: "21 Sep, 2023 at 2:00 AM",
    },
    {
      id: "supermanxx",
      category: "UI/UX Design",
      class: "Belajar Web Designer dengan Figma",
      status: "BELUM BAYAR",
      methode: "-",
      date: "-",
    },
    {
      id: "ironman99",
      category: "Web Development",
      class: "Belajar Web Designer dengan Figma",
      status: "SUDAH BAYAR",
      methode: "Credit Card",
      date: "20 Sep, 2023 at 2:00 AM",
    },
    {
      id: "lokiMaster",
      category: "Data Science",
      class: "Data Cleaning untuk pemula",
      status: "SUDAH BAYAR",
      methode: "Credit Card",
      date: "19 Sep, 2023 at 2:00 AM",
    },
    {
      id: "siapaAjaani",
      category: "Data Science",
      class: "Data Cleaning untuk pemula",
      status: "BELUM BAYAR",
      methode: "-",
      date: "-",
    },
    {
      id: "lokiMaster",
      category: "Web Development",
      class: "Membuat wordpress mudah",
      status: "BELUM BAYAR",
      methode: "-",
      date: "-",
    },
    {
      id: "visionOKE",
      category: "Data Science",
      class: "Data Cleaning untuk pemula",
      status: "SUDAH BAYAR",
      methode: "Credit Card",
      date: "10 Sep, 2023 at 2:00 AM",
    },
  ];

  return (
    <article>
      <div className="flex items-center justify-between px-16">
        <h1 className="font-bold text-md lg:text-xl">Status Pembayaran</h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-2 text-base border-2 rounded-full text-dark-blue hover:text-white hover:bg-dark-blue border-dark-blue">
            <Filter className="w-4 h-4 " /> Filter
          </button>
          <Search className="cursor-pointer text-dark-blue" />
        </div>
      </div>
      <div className="relative px-16 mt-4 mb-10 overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs bg-light-blue-100">
            <tr>
              <th scope="col" className="px-3 py-3">
                ID
              </th>
              <th scope="col" className="px-3 py-3">
                Kategori
              </th>
              <th scope="col" className="px-3 py-3">
                Kelas Premium
              </th>
              <th scope="col" className="px-3 py-3">
                Status
              </th>
              <th scope="col" className="px-3 py-3">
                Metode Pembayaran
              </th>
              <th scope="col" className="px-3 py-3">
                Tanggal Bayar
              </th>
            </tr>
          </thead>
          <tbody>
            {payment.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.id}
                  </th>
                  <td className="px-2 py-3">{item.category}</td>
                  <td className="px-2 py-3 font-semibold">{item.class}</td>
                  <td className={`px-2 py-3 font-bold uppercase ${item.status === "SUDAH BAYAR" ? "text-success" : "text-warning"}`}>
                    {item.status}
                  </td>
                  <td className="px-2 py-3 font-semibold">{item.methode}</td>
                  <td className="px-2 py-3">{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default PaymentStatusTable;
