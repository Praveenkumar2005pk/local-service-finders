import { useState } from "react";

function AddService() {
  const [service, setService] = useState({
    name: "",
    category: "",
    phone: "",
    rating: ""
  });

  const handleAdd = () => {
    let existing = JSON.parse(localStorage.getItem("services")) || [];
    existing.push(service);
    localStorage.setItem("services", JSON.stringify(existing));
    alert("Service added");
  };

  return (
    <div>
      <h2>Add Service</h2>

      <input placeholder="Name"
        onChange={(e) => setService({ ...service, name: e.target.value })} />

      <input placeholder="Category"
        onChange={(e) => setService({ ...service, category: e.target.value })} />

      <input placeholder="Phone"
        onChange={(e) => setService({ ...service, phone: e.target.value })} />

      <input placeholder="Rating"
        onChange={(e) => setService({ ...service, rating: e.target.value })} />

      <br />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddService;