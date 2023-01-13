import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
  const { name, slots, _id } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user?.email,
      patientName: user?.displayName,
      phone: e.target.phone.value,
    };

    fetch("http://localhost:8000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast(`appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have and appointment on, ${data?.booking?.date} at ${data?.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box space-y-3">
          <label
            htmlFor="booking-modal"
            className="btn btn-error btn-circle text-neutral absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for : {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center"
          >
            <input
              type="text"
              className="p-2 rounded-md focus:outline-none border focus:border-primary w-full max-w-xs"
              value={format(date, "PP")}
              disabled
            />
            <select
              name="slot"
              className="p-2 rounded-md focus:outline-none border focus:border-primary select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="p-2 rounded-md focus:outline-none border focus:border-primary w-full max-w-xs"
              disabled
              value={user?.displayName || "Not set"}
            />
            <input
              type="email"
              className="p-2 rounded-md focus:outline-none border focus:border-primary w-full max-w-xs"
              disabled
              value={user?.email || "Not set"}
            />
            <input
              type="text"
              className="p-2 rounded-md focus:outline-none border focus:border-primary w-full max-w-xs"
              placeholder="123456789"
              name="phone"
              id="phone"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs text-neutral"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
