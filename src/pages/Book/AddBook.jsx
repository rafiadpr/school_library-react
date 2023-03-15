import React, { useEffect, useState } from "react";
import axios from "axios";

function AddBook() {
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

  function handleChange(e) {
    // console.log(e.target.value);
    const { name, value } = e.target;
    console.log({ ...data, [name]: value });
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/book", data)
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
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                ISBN
              </label>
              <input
                id="isbn"
                name="isbn"
                type="number"
                placeholder="ISBN"
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
                placeholder="Title"
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
                placeholder="Author"
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
                placeholder="Publisher"
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
                placeholder="Category"
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
                placeholder="Stock"
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
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default AddBook;
