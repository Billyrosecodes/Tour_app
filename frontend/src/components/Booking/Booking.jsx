import React from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

const Booking = ({ tour, reviews }) => {
  const { price, reviews } = tour;

  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour_rating d-flex align-items-center">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* ========= Booking form========= */}

      <div className="booking_form">
        <FormGroup>
            <input type="text" placeholder="Full Name" id="fullname" required onChange={handleChange} />
        </FormGroup>
        <FormGroup>
            <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} />
        </FormGroup>
        <FormGroup>
            <input type="date" placeholder="" id="bookAt" required onChange={handleChange} />
            <input type="number" placeholder="" id="guestSize" required onChange={handleChange} />
        </FormGroup>
      </div>
    </div>
  );
};

export default Booking;
