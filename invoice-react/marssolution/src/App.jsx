import './App.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  //let index = 2;
  return (
    <>
      <br />
      <Navbar bg="light" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Maxpro Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tasklist">Available Tasks</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
        <Container>
          <Navbar.Brand href="#home">Maxpro Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#taskslist">Available Tasks</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

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
      <Button as="input" type="submit" value="Submit"/>
    </>
  );
}

export default App;
