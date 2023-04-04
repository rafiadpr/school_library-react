import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditBook() {
  const { id_book } = useParams();
  const [data, setData] = useState({
    isbn: "",
    title: "",
    author: "",
    publisher: "",
    category: "",
    stock: "",
  });
  const [cover, setCover] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/book/${id_book}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id_book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCoverChange = (e) => {
    setCover(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("isbn", data.isbn);
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("publisher", data.publisher);
    formData.append("category", data.category);
    formData.append("stock", data.stock);
    formData.append("cover", cover);
    try {
      const res = await axios.put(
        `http://localhost:8000/book/${id_book}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data.message);
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50 h-screen">
      <form
        method="POST"
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        onSubmit={handleSubmit}
      >
        <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="isbn" className="text-sm">
                ISBN
              </label>
              <input
                id="isbn"
                name="isbn"
                type="text"
                value={data.isbn}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={handleChange}
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
                value={data.title}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={handleChange}
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
                value={data.author}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={handleChange}
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
                value={data.publisher}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={handleChange}
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
                value={data.category}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="stock" className="text-sm">
                Stock
              </label>
              <input
                id="stock"
                name="stock"
                type="number"
                value={data.stock}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={handleChange}
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
                onChange={handleCoverChange}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </section>
  );
}

export default EditBook;
