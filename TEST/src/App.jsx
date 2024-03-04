import React, { useState } from "react";
import Form from "./components/form";
import Table from "./components/table";

function App() {
  const [list, setList] = useState([]);

  return (
    <div>
      <Form setList={setList} list={list} />
      <Table list={list} />
    </div>
  );
}

export default App;
