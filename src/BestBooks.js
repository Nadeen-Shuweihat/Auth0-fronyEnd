import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import "./BestBooks.css";
import axios from "axios";

class BestBooks extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let serverUrl = process.env.REACT_APP_SERVER;
    let url = `${serverUrl}/books`;

    let obj = {
      email: this.props.userEmail,
    };

    axios.get(url, { params: obj }).then((data) => {
      this.setState({ data: data.data });
      console.log(this.state.data);
    });
  };

  render() {
    //  this.getData();

    return (
      <>
        <Carousel style={{width:500, height:700 , margin:'0 auto' ,backgroundColor: 'grey', marginTop:'30'}}>
      {this.state.data.map((book)=>{
        return (
    
          <Carousel.Item>
            <img style={{width:400 ,height:650 }}
              className="d-block w-100"
              src={book.img}
              alt="First slide"
            />
            <Carousel.Caption style={{backgroundColor: 'black' ,opacity :0.8, borderRadius:10}}>
              <h3>{book.name}</h3>
              <p>{book.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
          );
        })}
        </Carousel>
      </>
    );
  }
}

export default BestBooks;
