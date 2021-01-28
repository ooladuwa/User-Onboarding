import "./App.css";
import { useState } from "react";
import Form from "./Form";
const initialUsers = {
  name: "",
  email: "",
};
function App() {
  ///States//////
  const [user, setUser] = useState(initialUsers);
  return (
    <div className="App">
      <Form setUser={setUser} />
      {/* rendering to page */}
      <div className="user container">
        <h2>User</h2>
        <p>Name : {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}
export default App;
