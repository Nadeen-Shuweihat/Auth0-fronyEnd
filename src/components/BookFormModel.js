import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";

export default class BookFormModel extends Component {
  render() {
    return (
      <div>
          {/* show={show} onHide={handleClose} */}
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Book to Favorite</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.postFunc}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text"
                  placeholder="Enter book name"
                  name="bookName" />
                   <Form.Text className="text-muted"></Form.Text>
               </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Book description</Form.Label>
                <Form.Control type="text" placeholder="Enter book description" name="bookDesc"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Status</Form.Label>

                <select name="select">
                  <option>choose a book</option>
                  <option value="life changing">Life Changing</option>
                  <option value="favorite five">Favorite Five</option>
                  <option value="recommended to me">Recommended To Me</option>
                </select>
              </Form.Group>
              <button
                className="btn btn-primary mr-2"
                variant="primary"
                onClick={this.props.closeFunc}
              >
                Submit
              </button>
              <Button variant="primary" onClick={this.props.closeFunc}>
                close
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
