import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [cover, setCover] = useState(null);

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

  function handleFileChange(e) {
    setCover(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("isbn", data.isbn);
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("publisher", data.publisher);
    formData.append("category", data.category);
    formData.append("stock", data.stock);
    formData.append("cover", cover);

    axios
      .post("http://localhost:8000/book", formData)
      .then((res) => {
        console.log(res.data.message);
        navigate(-1);
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
              <label htmlFor="name" className="text-sm">
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
              <label htmlFor="title" className="text-sm">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="author" className="text-sm">
                Author
              </label>
              <input
                id="author"
                name="author"
                type="text"
                placeholder="Author"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="publisher" className="text-sm">
                Publisher
              </label>
              <input
                id="publisher"
                name="publisher"
                type="text"
                placeholder="Publisher"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="category" className="text-sm">
                Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                placeholder="Category"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="stock" className="text-sm">
                Stock
              </label>
              <input
                id="stock"
                name="stock"
                type="text"
                placeholder="Stock"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="cover" className="text-sm">
                Cover
              </label>
              <input
                id="cover"
                name="cover"
                type="file"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={(e) => handleFileChange(e)}
              />
            </div>
            <button type="submit" className="flex justify-center px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">Submit</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default AddBook;
