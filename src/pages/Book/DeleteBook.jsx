import React, { useEffect, useState } from "react";
import axios from "axios";

function DeleteBook() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/book/2")
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
}

export default DeleteBook;
