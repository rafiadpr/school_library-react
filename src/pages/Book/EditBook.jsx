import React, { useEffect, useState } from "react";
import { BrowserRouter, useParams } from "react-router-dom";
import { ReactDOM } from "react";
import axios from "axios";

function EditBook() {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState([]);
  const [detail, setDetail] = useState([]);
  const { id_book } = useParams();
  const filteredData = data.filter((item) => item.id === Number(id_book));

  useEffect(() => {
    axios
      .get("http://localhost:8000/book")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((updateData) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/book/${id_book}`, updateData)
      .then((e) => {
        console.log(e.data.message);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50 h-screen">
      <form
        method="POST"
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        onSubmit={(e) => handleSubmit(e)}
      >
        <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          {filteredData.map((item) => {
            return ( 
              <div
                key={item.id}
                className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
              >
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    ISBN
                  </label>
                  <input
                    id="isbn"
                    name="isbn"
                    type="number"
                    placeholder={item.isbn}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Title
                  </label>
                  <input
                    id="lastname"
                    name="title"
                    type="text"
                    placeholder={item.title}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Author
                  </label>
                  <input
                    id="email"
                    name="author"
                    type="text"
                    placeholder={item.author}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="address" className="text-sm">
                    Publisher
                  </label>
                  <input
                    id="address"
                    name="publisher"
                    type="text"
                    placeholder={item.publisher}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="city" className="text-sm">
                    Category
                  </label>
                  <input
                    id="city"
                    name="category"
                    type="text"
                    placeholder={item.category}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="state" className="text-sm">
                    Stock
                  </label>
                  <input
                    id="state"
                    name="stock"
                    type="number"
                    placeholder={item.stock}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="zip" className="text-sm">
                    Cover
                  </label>
                  <input
                    id="zip"
                    name="cover"
                    type="file"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            );
          })}

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </section>
  );
}

export default EditBook;
