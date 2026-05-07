function ServiceCard({ service }) {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const handleBooking = () => {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const bookingData = {
      ...service,
      bookedBy: currentUser?.name,
      providerName: service.name,
      status: "pending"   // 🔥 NEW
    };

    bookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Service booked! Waiting for approval.");
  };

  return (
    <div className="card">
      <h3>{service.name}</h3>
      <p>{service.category}</p>
      <p>{service.phone}</p>
      <p>⭐ {service.rating || 4}</p>

      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default ServiceCard;