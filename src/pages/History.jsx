import React, { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/borrow")
      .then((res) => {
        // console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <>
      <div className="container mx-auto my-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Member ID
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Admin ID
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Date Of Borrow
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Date Of Return
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Status
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.map((item) => {
                return (
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {item.memberID}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.adminID}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.date_of_borrow}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.date_of_return}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.status}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <div class="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
                        <button class="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                          Edit
                        </button>

                        <button class="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                          View
                        </button>

                        <button class="inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default History;
