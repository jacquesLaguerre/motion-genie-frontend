import { useEffect } from "react";
import { Button, Form, Input } from "antd";

export default function ReviewForm() {
  const handleSubmit = (newReview) => {
    fetch("http://localhost:3030/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then()
      .catch(console.error);
  };


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="Name"
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Review"
        name="review"
        rules={[{ required: true, message: "Please input your review!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
