import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import SearchBar from "../components/SearchBar";
import { servicesData } from "../data/servicesData";

function Services() {
  const [search, setSearch] = useState("");

  const stored = JSON.parse(localStorage.getItem("services")) || [];
  const allServices = [...servicesData, ...stored];

  const filtered = allServices.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Services</h2>

      <SearchBar search={search} setSearch={setSearch} />

      {filtered.map((s, i) => (
        <ServiceCard key={i} service={s} />
      ))}
    </div>
  );
}

export default Services;