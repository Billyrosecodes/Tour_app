import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/tour.css";
import tourData from "../assets/data/tours";
import TourCard from "./../shared/TourCard";
import SearchBar from "./../shared/SearchBar";
import Newsletter from "./../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 8); //later we will use backend data count
    setPageCount(pages);
  }, [page]);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tours;
