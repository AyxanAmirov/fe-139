import React, { useState } from "react";

function Form({ list, setList }) {
  const [userId, setUserId] = useState(1);
  const [formData, setFormData] = useState({
    id: userId,
    fullName: "",
    email: "",
    pass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserId(userId + 1);
    setList([...list, { ...formData, id: userId }]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="FullName"
            required
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
          />
          <input type="checkbox" />
        </div>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}

export default Form;
