import React from "react";

function Table({ list }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>FullName</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.pass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
