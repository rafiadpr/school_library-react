import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditMember() {
  const { id_member } = useParams();
  const [data, setData] = useState({
    name: "",
    gender: "",
    contact: "",
    address: "",
  });
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/member/${id_member}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id_member]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
    console.log(photo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("gender", data.gender);
    formData.append("contact", data.contact);
    formData.append("address", data.address);
    formData.append("photo", photo);

    console.log(formData);
    try {
      const res = await axios.put(
        `http://localhost:8000/member/${id_member}`,
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
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={data.name}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={handleChange}
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
                value={data.gender}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={handleChange}
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
                value={data.contact}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={handleChange}
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
                value={data.address}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="zip" className="text-sm">
                photo
              </label>
              <input
                id="photo"
                name="photo"
                type="file"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                onChange={handlePhotoChange}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </section>
  );
}

export default EditMember;
