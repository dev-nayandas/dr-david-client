import React from 'react';
import { Table } from 'react-bootstrap';

const Feedback = () => {
    return (
       <div>
            <h2 className='text-primary text-center mt-5'>My Schedule</h2>
        <Table className='mt-5 w-50 mx-auto' striped bordered hover variant="info">
        <thead>
          <tr>
            <th>Sl.</th>
            <th>Time</th>
            <th>Day</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>9.00-12.00</td>
            <td>Monday-Wednesday</td>
            <td>Newyork</td>
          </tr>
          <tr>
            <td>2</td>
            <td>14.00-18.00</td>
            <td>Thursday-Friday</td>
            <td>Texus</td>
          </tr>
          <tr>
            <td>3</td>
            <td>18.00-20.00</td>
            <td>Thursday-Friday</td>
            <td>Telado</td>
          </tr>
          
        </tbody>
      </Table>
       </div>
    );
};

export default Feedback;