import { useEffect, useState } from "react";
import { getCurrentUser } from "../utils/auth";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    const allEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(allEvents);

    const currentUser = getCurrentUser();
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const userBookings = bookings.filter(b => b.user === currentUser.email);
    setBooked(userBookings.map(b => b.eventId));
  }, []);

  const Booking = (eventId) => {
    const currentUser = getCurrentUser();
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if (bookings.some(b => b.user === currentUser.email && b.eventId === eventId)) {
      alert("You already booked this event.");
      return;
    }

    bookings.push({ user: currentUser.email, eventId });
    localStorage.setItem("bookings", JSON.stringify(bookings));
    setBooked([...booked, eventId]);
    alert("Ticket booked successfully!");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Available Events</h2>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Price: ₹{event.price}</p>
              <button
                className={`mt-2 px-4 py-2 rounded ${
                  booked.includes(event.id)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white"
                }`}
                onClick={() => Booking(event.id)}
                disabled={booked.includes(event.id)}
              >
                {booked.includes(event.id) ? "Booked" : "Book Ticket"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
