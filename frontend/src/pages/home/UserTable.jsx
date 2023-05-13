import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';

const UserTable = () => {

  // State variable to hold the list of users
  const [users, setUsers] = useState([]);

  // Load the list of users from the backend when the component mounts
  useEffect(() => {
    axios.get('/customers')
      .then(response => setUsers(response.data.data))
      .catch(error => console.log(error));
  }, []);


  const handleDelete = (id) => {
    toast.success("Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
    axios.delete(`/customers/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.log(error));
      
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>State</th>
          <th>City</th>
          <th>Languages</th>
          <th>Active</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>{user.country}</td>
            <td>{user.state}</td>
            <td>{user.city}</td>
            <td>{user.language.join(', ')}</td>
            <td>{user.isActive ? 'Yes' : 'No'}</td>
            <td>
            <Button variant="primary">Edit</Button>{' '}
              <Button variant="danger" onClick={() => handleDelete(user._id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
