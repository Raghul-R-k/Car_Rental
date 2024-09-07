// import React, { useEffect } from "react";

// import carData from "../assets/data/carData";
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import { useParams } from "react-router-dom";
// import BookingForm from "../components/UI/BookingForm";
// import PaymentMethod from "../components/UI/PaymentMethod";

// const CarDetails = () => {
//   const { slug } = useParams();

//   const singleCarItem = carData.find((item) => item.carName === slug);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [singleCarItem]);

//   return (
//     <Helmet title={singleCarItem.carName}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6">
//               <img src={singleCarItem.imgUrl} alt="" className="w-100" />
//             </Col>

//             <Col lg="6">
//               <div className="car__info">
//                 <h2 className="section__title">{singleCarItem.carName}</h2>

//                 <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
//                   <h6 className="rent__price fw-bold fs-4">
//                     ${singleCarItem.price}.00 / Day
//                   </h6>

//                   <span className=" d-flex align-items-center gap-2">
//                     <span style={{ color: "#f9a826" }}>
//                       <i class="ri-star-s-fill"></i>
//                       <i class="ri-star-s-fill"></i>
//                       <i class="ri-star-s-fill"></i>
//                       <i class="ri-star-s-fill"></i>
//                       <i class="ri-star-s-fill"></i>
//                     </span>
//                     ({singleCarItem.rating} ratings)
//                   </span>
//                 </div>

//                 <p className="section__description">
//                   {singleCarItem.description}
//                 </p>

//                 <div
//                   className=" d-flex align-items-center mt-3"
//                   style={{ columnGap: "4rem" }}
//                 >
//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-roadster-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleCarItem.model}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-settings-2-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleCarItem.automatic}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-timer-flash-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleCarItem.speed}
//                   </span>
//                 </div>

//                 <div
//                   className=" d-flex align-items-center mt-3"
//                   style={{ columnGap: "2.8rem" }}
//                 >
//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
//                     {singleCarItem.gps}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-wheelchair-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleCarItem.seatType}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-building-2-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleCarItem.brand}
//                   </span>
//                 </div>
//               </div>
//             </Col>
//             <center>
//             <Col lg="7" className="mt-5">
//               <div className="booking-info mt-5">
//                 <h5 className="mb-4 fw-bold ">Booking Information</h5>
//                 <BookingForm />
//               </div>
//             </Col>
//             </center>

//             {/* <Col lg="5" className="mt-5"> */}
//               {/* <div className="payment__info mt-5"> */}
//                 {/* <h5 className="mb-4 fw-bold ">Payment Information</h5> */}
//                 {/* <PaymentMethod /> */}
//               {/* </div> */}
//             {/* </Col> */}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import BookingForm from "../components/UI/BookingForm";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    // Fetch car details by ID
    axios.get(`http://127.0.0.1:8000/cars/cars/${id}/`)
      .then(response => setCar(response.data))
      .catch(error => console.error('There was an error fetching the car details!', error));
  }, [id]);

  if (!car) return <p>Loading...</p>;

  const { img_url, car_name, description, automatic, speed, price, seat_type, brand, rating, is_available } = car;

  return (
    <Helmet title={car_name}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={img_url} alt={car_name} className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{car_name}</h2>
                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${price} <span>/ Day</span>
                  </h6>
                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({rating} ratings)
                  </span>
                </div>
                <p className="section__description">
                  {description}
                </p>
                <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i> {seat_type}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-settings-2-line" style={{ color: "#f9a826" }}></i> {automatic ? 'Automatic' : 'Manual'}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i> {speed} km/h
                  </span>
                </div>
                <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i> {is_available ? 'Available' : 'Not Available'}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-wheelchair-line" style={{ color: "#f9a826" }}></i> {seat_type}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-building-2-line" style={{ color: "#f9a826" }}></i> {brand}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
