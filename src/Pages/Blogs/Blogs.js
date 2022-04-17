import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Sl.</th>
      <th>Authorization</th>
      <th>Authentication</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Person’s or user’s authorities are checked for accessing the resources</td>
      <td>The identity of users are checked for providing the access to the system</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>While in this process, users or persons are validated</td>
      <td>In authentication process, users or persons are verified.</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>While this process is done after the authentication process</td>
      <td>It is done before the authorization process</td>
      
    </tr>
    <tr>
      <td>4</td>
      <td>While it needs user’s privilege or security levels</td>
      <td>It needs usually user’s login details.</td>
      
    </tr>
    <tr>
      <td>5</td>
      <td>While it determines What permission do user have?</td>
      <td>Authentication determines whether the person is user or not.</td>
      
    </tr>
    
  </tbody>
</Table>
<h3>Why we are using Firebase?</h3>
<p>1. With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others.
    2.Firebase is a good choice if you want to deploy a working product on the cloud rapidly.
    3.As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets.
    4. Firebase the latest platform which has effective tools to develop Mobile and Web Applications.
    5.  It is built to help developers to share various features between cross-platform apps related to Databases, Config, and Notifications.
</p>
<h3> What are the other Services of Firebase?</h3>
    
    <p>
       
1. Firebase provides Cloud Functions.
2.  Firebase provides Hosting.
3.  Firebase providesCloud Storage.
4.  Firebase provides Google Analytics.
5.  Firebase provides Predictions.
6.  Firebase provides Cloud Messaging.</p>

        </div>
    );
};

export default Blogs;