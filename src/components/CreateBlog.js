import { Button, Input, Typography } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../App";

const { TextArea } = Input;

const CreateBlog = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const { onSubmit } = useContext(BlogContext);

  const navigate = useNavigate();

  const onClickSubmit = () => {
    onSubmit(values);
    navigate("/home");
  };

  const onChangeValues = ({ target: { name, value } }) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          width: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            alignItems: "start",
            width: "inherit",
          }}
        >
          <Typography.Title level={5}>Title</Typography.Title>
          <Input
            name="title"
            value={values.title}
            style={{ width: "inherit" }}
            size="large"
            onChange={onChangeValues}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            alignItems: "start",
            width: "inherit",
          }}
        >
          <Typography.Title level={5}>Description</Typography.Title>
          <TextArea
            name="description"
            value={values.description}
            style={{ width: "inherit", height: 200 }}
            size="large"
            onChange={onChangeValues}
          />
        </div>
        <Button
          type="primary"
          size="large"
          style={{ marginTop: "30px" }}
          onClick={onClickSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateBlog;
