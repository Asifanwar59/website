import './App.css';
import Button from 'react-bootstrap/Button';
//import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

// Render Images
// Main image
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

//Rounded images
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//Path to local images
import mars_logo_v5 from './images/mars_logo_v5.jpg';
import shoeImage from './images/shoe-puma.png';
import watchImg from './images/watch.png';
import raymondImg from './images/raymond.png';

//T-shirts
import TshirtImg from './images/T-Shirt.png';
import tshirt1 from './images/tshirt-1.png';
import tshirt2 from './images/tshirt-2.png';
import tshirt3 from './images/tshirt-3.png';

//Scenary
import scenery1 from './images/scenary1.png';
import scenery2 from './images/scenary2.png';
import scenery3 from './images/scenary3.png';
import scenery4 from './images/scenary4.png';

function App() {
  return (
    <>
      <Navbar bg="info" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={mars_logo_v5}
              alt="Logo"
              width="60"
              height="60"
              className="d-inline-block align-top"
              style={{ marginRight: '2px' }}
            />
            Mehdi Website
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Login</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
      {/*<br />*/}

      {/* ********Start of Main slide show Corousel******** */}
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            //className="d-block w-100" // Apply Bootstrap classes for responsive image behavior
            className="d-block img-fluid w-100 h-100"
            src={scenery1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Scenary-1</h3>
            <p>The Beautiful.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block img-fluid h-100 w-100"
            //className="d-block w-100 h-100"
            src={scenery2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Scenary-2</h3>
            <p> Wide ranges. </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block img-fluid h-100 w-100"
            src={scenery2}
            alt="First slide"
          //width={50}
          //height={50}
          //style={{ height: '800px', width: '50', objectFit: 'cover' }}

          />
          <Carousel.Caption>
            <h3>Scenary-3</h3>
            <p>The Beautiful.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block img-fluid h-100 w-100"
            //className="d-block w-100 h-100"
            src={scenery3}
            alt="Third slide"
          //width={50}
          //height={50}
          //style={{ height: '800px', width: '50', objectFit: 'cover' }}

          />
          <Carousel.Caption>
            <h3>Scenary-4</h3>
            <p> Wide ranges. </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <br />
      {/* ********End of Main slide show Corousel******** */}

      {/* ********Start of product list 1******** */}
      <Carousel slide fade>
        <Carousel.Item interval={300}>
          {/* Container with three images as a slide */}
          <Container>
            <Row>
              <Col xs={3} md={3}>
                <Image src={watchImg} roundedCircle style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Know more</Button>
                </div>
              </Col>
              <Col xs={3} md={3}>
                <Image src={watchImg} roundedCircle style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Know More</Button>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <Image src={watchImg} roundedCircle style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Know more</Button>
                </div>
              </Col>
              <Col xs={3} md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={tshirt3} />
                  <Card.Body>
                    <Card.Title>T-shirt</Card.Title>
                    <Card.Text>
                      Wide range of clotings to fit all sizes at discounted price.
                    </Card.Text>
                    <Button variant="primary">Know more</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3} md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={tshirt3} />
                  <Card.Body>
                    <Card.Title>T-shirt</Card.Title>
                    <Card.Text>
                      Wide range of clotings to fit all sizes at discounted price.
                    </Card.Text>
                    <Button variant="primary">Know more</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />

          </Container>
          <Carousel.Caption>
            <h3>Product Gallery</h3>
            <p>Browse our featured items.</p>
          </Carousel.Caption>
        </Carousel.Item>

{/* Second slide with three images 
        <Carousel.Item interval={500}>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src={shoeImage} rounded style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Buy</Button>
                </div>

              </Col>
              <Col xs={6} md={4}>
                <Image src={shoeImage} roundedCircle style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Buy</Button>
                </div>

              </Col>
              <Col xs={6} md={4}>
                <Image src={shoeImage} thumbnail style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Buy</Button>
                </div>

              </Col>
            </Row>
          </Container>
          <Carousel.Caption>
            <h3>Product Gallery</h3>
            <p>Browse our featured items.</p>
          </Carousel.Caption>
        </Carousel.Item>
        */}

      </Carousel>

      {/* ********Start of product list******** */}
      <Carousel slide fade>
        <Carousel.Item interval={800}>
          {/* Container with three images as a slide */}
          <Container>
            <Row>
              <Col xs={3} md={3}>
                <Image src={TshirtImg} roundedCircle style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Know more</Button>
                </div>
              </Col>
              <Col xs={3} md={3}>
                <Image src={tshirt1} roundedCircle style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Know More</Button>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <Image src={tshirt2} roundedCircle style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Know more</Button>
                </div>
              </Col>
              <Col xs={3} md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={tshirt3} />
                  <Card.Body>
                    <Card.Title>T-shirt</Card.Title>
                    <Card.Text>
                      Wide range of clotings to fit all sizes at discounted price.
                    </Card.Text>
                    <Button variant="primary">Know more</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3} md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={tshirt3} />
                  <Card.Body>
                    <Card.Title>T-shirt</Card.Title>
                    <Card.Text>
                      Wide range of clotings to fit all sizes at discounted price.
                    </Card.Text>
                    <Button variant="primary">Know more</Button>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
            <br />

          </Container>
          <Carousel.Caption>
            <h3>Product Gallery</h3>
            <p>Browse our featured items.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item interval={500}>
          {/* Container with three images as a slide */}
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src={shoeImage} rounded style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Buy</Button>
                </div>

              </Col>
              <Col xs={6} md={4}>
                <Image src={shoeImage} roundedCircle style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Buy</Button>
                </div>

              </Col>
              <Col xs={6} md={4}>
                <Image src={shoeImage} thumbnail style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Buy</Button>
                </div>

              </Col>
            </Row>
          </Container>
          <Carousel.Caption>
            <h3>Product Gallery</h3>
            <p>Browse our featured items.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <br />
      <br />

      {/* ********Start of product list 3******** */}
      <Carousel slide fade>
        <Carousel.Item interval={800}>
          {/* Container with three images as a slide */}
          <Container>
            <Row>
              <Col xs={3} md={3}>
                <Image src={TshirtImg} roundedCircle style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Know more</Button>
                </div>
              </Col>
              <Col xs={3} md={3}>
                <Image src={tshirt1} roundedCircle style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Know More</Button>
                </div>
              </Col>
              <Col xs={5} md={3}>
                <Image src={tshirt2} roundedCircle style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Know more</Button>
                </div>
              </Col>
              <Col xs={3} md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={tshirt3} />
                  <Card.Body>
                    <Card.Title>T-shirt</Card.Title>
                    <Card.Text>
                      Wide range of clotings to fit all sizes at discounted price.
                    </Card.Text>
                    <Button variant="primary">Know more</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3} md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={tshirt3} />
                  <Card.Body>
                    <Card.Title>T-shirt</Card.Title>
                    <Card.Text>
                      Wide range of clotings to fit all sizes at discounted price.
                    </Card.Text>
                    <Button variant="primary">Know more</Button>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
            <br />

          </Container>
          <Carousel.Caption>
            <h3>Product Gallery</h3>
            <p>Browse our featured items.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item interval={500}>
          {/* Container with three images as a slide */}
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src={shoeImage} rounded style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Buy</Button>
                </div>

              </Col>
              <Col xs={6} md={4}>
                <Image src={shoeImage} roundedCircle style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Buy</Button>
                </div>

              </Col>
              <Col xs={6} md={4}>
                <Image src={shoeImage} thumbnail style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary">Buy</Button>
                </div>

              </Col>
            </Row>
          </Container>
          <Carousel.Caption>
            <h3>Product Gallery</h3>
            <p>Browse our featured items.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <br />
      <br />


      <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">© 2025 Mars Solution. All Rights Reserved. </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />



      {/* ----------------Backup code ---------------------*/}
      {/*}
      <Container>
        <Row>
          <Col xs={6} md={4}>
            
            <Image src={TshirtImg} rounded />
          </Col>
          <Col xs={6} md={4}>

            <Image src={shoeImage} roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src={watchImg} thumbnail />
          </Col>
        </Row>
      </Container>
      <br />

      return <Image src="holder.js/100px250" fluid />;

      <br />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Action
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/Add Task">Add Task</Dropdown.Item>
          <Dropdown.Item href="#/Edit Task">Edit Task</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br />

      <Card>
        <Card.Body>Please add task details and submit.</Card.Body>
      </Card>
      <br />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Test Case ID</th>
            <th>Name</th>
            <th>Task description</th>
            <th>Efforts in Hrs</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Button as="input" type="submit" value="Submit" />
*/}
    </>
  );
}

export default App;
