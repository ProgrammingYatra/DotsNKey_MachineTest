import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddCustomer() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [languages, setLanguages] = useState("");
  const [country, setCountry] = useState("");
  const [active, setActive] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("languages", JSON.stringify(languages));
    formData.append("active", active);
    try {
      const response = await axios.post("/create", {
        formData,
      });

      console.log(response.data);
      // redirect to home page or dashboard
      navigate("/");
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.error(error);
      // display error message to user
      toast.error("OOOOoooohhhhhhh !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Customer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="programmingyatra"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="rupam@programmingyatra.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="123456#Abc"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="123456#Abc"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>City</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option>Open this select menu</option>
                <option value="Umbergaon">Umbergaon</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Azamgarh">Azamgarh</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>State</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              >
                <option>Open this select menu</option>
                <option value="Gujarat">Gujarat</option>
                <option value="UP">UP</option>
                <option value="Maharashtra">Maharashtra</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>Country</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>Open this select menu</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
              <Form.Label>Language</Form.Label>
              <Form.Select
                aria-label="Default select example"
                nvalue={languages}
                onChange={(e) =>
                  setLanguages(
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
                required
              >
                <option>Open this select menu</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Active"
                value={active}
                onChange={(e) => setActive(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCustomer;
