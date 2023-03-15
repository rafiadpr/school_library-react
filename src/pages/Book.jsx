import React, { useEffect, useState } from "react";
import axios from "axios";

function Book() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/book")
      .then((res) => {
        // console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  const handleDelete = (dataID) => {
    // Delete item from server
    axios
      .delete(`http://localhost:8000/book/${dataID}`)
      .then((response) => {
        setData(data.filter((data) => data.ID !== dataID));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mx-auto my-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  ID
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  ISBN
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Title
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Author
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Publisher
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Category
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Stock
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Cover
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Aksi
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.map((item) => {
                return (
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {item.id}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.isbn}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.title}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.author}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.publisher}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.category}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.stock}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.cover}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <div class="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
                        <button class="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                          <a href="/Book/EditBook">Edit</a>
                        </button>

                        <button class="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                        <a href="/Book/ViewBook">View</a>
                        </button>

                        <button class="inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative">
                        <a href="/Book/DeleteBook">Delete</a>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <a
          class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="/Book/AddBook"
        >
          Add Book
        </a>
      </div>
    </>
  );
}

export default Book;
