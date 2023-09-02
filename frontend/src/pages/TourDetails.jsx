import React from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";

const TourDetails = () => {
  const { id } = useParams();

  //This is data static data later we call our API and load data from DB
  const tour = tourData.find((tour) => tour.id == id);

  //destructure propeeties from tour object
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } =
    tour;
  const {totalRating, avgRating} = calculateAvgRating(reviews)
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="tour_content">
                <img src={photo} alt="" />

                <div className="tour_info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-1">
                    <span className="tour_rating d-flex align-items-center gap-1">
                      <i class="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i>
                      {calculateAvgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not Rated"
                      ) : (
                        <span>({reviews.length})</span>
                      )}
                    </span>

                    <span>
                        <i class="ri-map-pin-user-fill"></i>{address}
                    </span>
                  </div>

                  <div className="tour_extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i>{city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i>${price} /per person
                    </span>
                    <span>
                      <i className="ri-group-line"></i>{maxGroupSize}
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* ============  tour reviews section   ========== */}
                <div className="tour_reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
