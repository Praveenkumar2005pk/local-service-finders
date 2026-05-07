import { useState } from "react";

function Bookings() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );

  // FILTER BASED ON ROLE
  const filteredBookings =
    currentUser?.role === "provider"
      ? bookings.filter((b) => b.providerName === currentUser.name)
      : bookings.filter((b) => b.bookedBy === currentUser.name);

  // ACCEPT
  const acceptBooking = (index) => {
    const updated = [...bookings];
    updated[index].status = "approved";
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  // REJECT
  const rejectBooking = (index) => {
    const updated = [...bookings];
    updated[index].status = "rejected";
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  // CANCEL (USER)
  const cancelBooking = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>My Bookings</h2>

      {filteredBookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        filteredBookings.map((b, i) => (
          <div key={i} className="card">
            <h3>{b.name}</h3>
            <p>{b.category}</p>
            <p>{b.phone}</p>

            {/* STATUS DISPLAY */}
            <p>
              Status:{" "}
              <b
                style={{
                  color:
                    b.status === "approved"
                      ? "green"
                      : b.status === "rejected"
                      ? "red"
                      : "orange"
                }}
              >
                {b.status}
              </b>
            </p>

            {/* PROVIDER VIEW */}
            {currentUser?.role === "provider" && (
              <>
                <p>Booked By: {b.bookedBy}</p>

                {b.status === "pending" && (
                  <>
                    <button onClick={() => acceptBooking(i)}>
                      Accept
                    </button>
                    <button onClick={() => rejectBooking(i)}>
                      Reject
                    </button>
                  </>
                )}
              </>
            )}

            {/* USER VIEW */}
            {currentUser?.role === "user" && (
              <>
                {b.status === "pending" && (
                  <button onClick={() => cancelBooking(i)}>
                    Cancel
                  </button>
                )}
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Bookings;