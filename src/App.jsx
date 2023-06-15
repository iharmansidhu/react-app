import "./App.css";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([{}]);
  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJHYWdhbmRlZXAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zdXJuYW1lIjoiU2luZ2giLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJnYWdhbmRlZXBkZHpAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2ODY5MjA1NDQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNTkvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI1OS8ifQ.CFPgzY49XdkcnVamT0VMnMsCw14X1pf-6BKvjVte-5A`,
    },
  };
  useEffect(() => {
    axios
      .get("http://20.204.99.128/etapi/api/Projects/AllProjects", config)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Heading />
      <Table data={data} />
    </div>
  );
}

export default App;
