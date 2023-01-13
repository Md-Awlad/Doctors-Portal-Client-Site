import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../shared/loading";
import BookingModal from "./bookingModal";
import Service from "./service";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    error,
    refetch,
  } = useQuery(["available"], () =>
    fetch(`http://localhost:8000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl text-center font-bold text-secondary">
        Available Appointment on {format(date, "PP")}
      </h2>
      {error ? (
        <div className="alert alert-info shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current flex-shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>available appointment error..!!</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {services?.map((service, index) => (
            <Service
              key={index}
              service={service}
              setTreatment={setTreatment}
              error={error}
            />
          ))}
        </div>
      )}
      {treatment && (
        <BookingModal
          refetch={refetch}
          treatment={treatment}
          setTreatment={setTreatment}
          date={date}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
