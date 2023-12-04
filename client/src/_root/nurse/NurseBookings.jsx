import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import BookingDetail from "../../components/shared/BookingDetail";

const NurseBookings = () => {
  const { id } = useContext(UserContext);
  const [bookings, setBookings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [singleBooking, setSingleBooking] = useState({});
  // trigger use effect and loop over all the patients data and pass the details each patient card

  useEffect(() => {
    if (id) {
      const getBookings = async () => {
        const { data } = await axios.get(`/book-nurse/nurse/${id}`);

        setBookings(data);
      };
      getBookings();
    }
  }, [id]);

  return (
    <div className="lg:w-[60%] md:w-[80%] mx-auto mt-20">
      <h1 className="text-2xl font-semibold text-gray-800 mb-10">
        Your Patients
      </h1>

      <table className="min-w-full bg-white border border-gray-300 shadow">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Summary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={`${booking.name}-${index + 1}`}>
              <td>{booking.name}</td>
              <td>{booking.address}</td>
              <td>{booking.ailmentReason}</td>
              <td>
                <button
                  className="rounded-full bg-primary py-1 px-5 text-white"
                  onClick={() => {
                    setIsOpen(true);
                    setSingleBooking(booking);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <BookingDetail
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        patient={singleBooking}
      />
    </div>
  );
};

export default NurseBookings;
