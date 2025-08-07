import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 3) {
    errors.username = "Must be 3 characters or greater";
  }

  if (!values.comment) {
    errors.comment = "Required";
  } else if (values.comment.length < 5) {
    errors.comment = "Must be 5 characters or greater";
  }
  return errors;
};

const Form = ({ addNewComment }) => {
  //   const [formik.values, setformik.values] = useState({
  //     username: "",
  //     comment: "",
  //     rating: 5,
  //     id: uuidv4(),
  //   });

  const formik = useFormik({
    initialValues: {
      username: "",
      comment: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //   const handleInputChange = (event) => {
  //     setformik.values((currData) => ({
  //       ...currData,
  //       [event.target.name]: event.target.value,
  //     }));
  //   };

  //   const handleSubmit = (event) => {
  //     console.log(formik.values);
  //     addNewComment(formik.values);
  //     event.preventDefault();
  //     setformik.values({
  //       username: "",
  //       comment: "",
  //       rating: 5,
  //     });
  //   };

  return (
    <div>
      <h4>Give a comment</h4>
      <form action="" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          value={formik.values.username}
          placeholder="username"
          name="username"
          onChange={formik.handleChange}
        />{" "}
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <br />
        <br />
        <textarea
          name="comment"
          value={formik.values.comment}
          placeholder="remarks"
          id=""
          onChange={formik.handleChange}
        ></textarea>
        <br />
        <br />
        <input
          type="number"
          value={formik.values.rating}
          placeholder="rating"
          min={1}
          name="rating"
          max={5}
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default Form;
