import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validtionSchima = Yup.object({
  name: Yup.string().required("is must be not empty !!"),
  lastName: Yup.string().required("is must be not empty !!"),
  image: Yup.string().required("is must be not empty !!"),
  email: Yup.string().required("is must be not empty !!").email("example@example.com"),
  password: Yup.string().required("is must be not empty !!").min(8, "must be more than 8 ").max(20, "whatEver")
})


export default function Singup(props) {

  const [user, setUser] = useState(false ? "" : { name: "", lastName: "", image: "", email: "", password: "" }); // user info





  const history = useHistory();

  const [register, setRegister] = useState(true); // to show aleart
  const [image, setImage] = useState("")
  //to add the input inside user
  // to add the user info to database
  const onSubmit = (values) => {
    // values.preventDefault();
    axios
      .post("http://localhost:5000/api/user/register", values)
      .then((res) => {
        const user = res.data.user;
        if (user) {
          history.push("/login");
        } else {
          setRegister(false);
          setTimeout(() => {
            setRegister(true);
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
  };
console.log(process.env)
  const uploadImagefunc = (e) => {
    var formdata = new FormData();
    formdata.append("image", e.target.files[0]);
    axios.post("https://api.imgur.com/3/image", formdata  , { headers: {"Authorization" : "Client-ID 218eb66b0d739ed"}})
      .then(result => console.log(result.data.data.link))
      .catch(error => console.log('error', error));
  }
  console.log(image)

  return (
    <>
      {!register && (
        <Alert variant={"danger"}>
          The email is already in use. Please change the email
        </Alert>
      )}
      <Formik
        initialValues={user}
        onChange={false}
        validateOnBlur= {false}
        validationSchema={validtionSchima}
        onSubmit={values => onSubmit(values)}
      >
        <FormikForm className="mt-5">
          <Row className="justify-content-center mt-5">
            <Col md={8}>
              <Form.Row>
                <Col md={6}>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    as={Field}
                    placeholder="First name"
                    name="name"

                  />
                  <ErrorMessage name="name" render={(msg) => <Alert variant={"danger"}>
                    {msg}
                  </Alert>} />
                </Col>
                <Col md={6}>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    as={Field}
                    placeholder="Last name"
                    name="lastName"

                  />
                  <ErrorMessage name="lastName" render={(msg) => <Alert variant={"danger"}>
                    {msg}
                  </Alert>} />
                </Col>
                <Col md={12}>
                  <Form.Label>image</Form.Label>
                  <Form.Control
            
                    type='file'
                    placeholder="image"
                    name="image"
                   onChange ={uploadImagefunc}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    as={Field}
                    type="email"
                    placeholder="Enter email"
                    name="email"

                  />
                  <ErrorMessage name="email" render={(msg) => <Alert variant={"danger"}>
                    {msg}
                  </Alert>} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    as={Field}
                    type="password"
                    placeholder="Password"
                    name="password"

                  />
                  <ErrorMessage name="password" render={(msg) => <Alert variant={"danger"}>
                    {msg}
                  </Alert>} />
                </Form.Group>
              </Form.Row>
              <Button
                variant="primary"
                type="submit"
              // onClick={(e) => onSubmit(e)}
              >
                Submit
            </Button>
            </Col>
          </Row>
        </FormikForm>
      </Formik>
    </>
  );
}
