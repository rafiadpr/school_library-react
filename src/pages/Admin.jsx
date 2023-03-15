import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
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

  return (
    <>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/Book"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Book
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/Member"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Member
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/History"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                History
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/Admin"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Admin
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/Borrow"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Borrow
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Admin;
