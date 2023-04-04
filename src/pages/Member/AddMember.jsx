import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMember() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/member")
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
    setPhoto(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("gender", data.gender);
    formData.append("contact", data.contact);
    formData.append("address", data.address);
    formData.append("photo", photo);

    axios
      .post("http://localhost:8000/member", formData)
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
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="gender" className="text-sm">
                Gender
              </label>
              <input
                id="gender"
                name="gender"
                type="text"
                placeholder="Gender"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="contact" className="text-sm">
                Contact
              </label>
              <input
                id="contact"
                name="contact"
                type="number"
                placeholder="Contact"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Your Address"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="photo" className="text-sm">
                Photo
              </label>
              <input
                id="photo"
                name="photo"
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

export default AddMember;
