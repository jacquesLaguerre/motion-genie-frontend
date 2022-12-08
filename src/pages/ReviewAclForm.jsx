import { Button, Form, Input } from "antd"; 
import { useNavigate } from "react-router-dom";

export default function ReviewAclForm() {
  let navigate = useNavigate()
  const handleSubmit = (newReview) => {
    fetch("http://localhost:4050/reviewAcl",
    // "https://motion-genie-api.web.app/reviewACl",
     {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then(()=> navigate('/review-acl'))
      .catch(console.error);
  };




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
        
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      
      </Form.Item>
    </Form>
  );
}
 