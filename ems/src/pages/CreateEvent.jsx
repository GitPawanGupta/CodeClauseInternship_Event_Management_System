import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allEvents = JSON.parse(localStorage.getItem("events")) || [];

    const newEvent = {
      ...form,
      id: Date.now(), // unique ID
    };

    allEvents.push(newEvent);
    localStorage.setItem("events", JSON.stringify(allEvents));

    alert("Event created successfully!");
    navigate("/events");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Create New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Ticket Price"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
