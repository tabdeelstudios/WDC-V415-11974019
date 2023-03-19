import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function WriteBlog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://crudcrud.com/api/d239a64cc7684eeda0ced4d4bf06c642/posts", {
        author: data.Author,
        title: data.PostTitle,
        content: data.Content,
        datetime: data.Date,
      })
      .then((response) => console.log(response.data));
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Author"
        {...register("Author", { required: true })}
      />
      <input
        type="text"
        placeholder="Post Title"
        {...register("PostTitle", { required: true, maxLength: 25 })}
      />
      <textarea {...register("Content", { required: true })} />
      <input
        type="datetime-local"
        placeholder="Date"
        {...register("Date", { required: true })}
      />

      <input type="submit" />
    </form>
  );
}
