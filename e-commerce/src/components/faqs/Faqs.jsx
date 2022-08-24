import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./faqs.css";

const Faqs = () => {
  return (
    <section className="faqs">
      <h5>FAQS</h5>
      <div className="faqs-questions-container" flush>
        <Accordion headerstyle={{ height: "50px", width: "60px" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Can I get a reminder of any discount offer?
            </Accordion.Header>
            <Accordion.Body>
              Discounted prices will always be on display on the rpoducts card.
              If you need early reminds on a specific product you can subscribe
              to the JavaDey newsletter for all news and updates.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How long will it take for my products to be delivered?
            </Accordion.Header>
            <Accordion.Body>
              Products deliveries will be made within 1-3 working days within
              the region of JavaDey working farms.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Can I request for a change in product/refunds ?
            </Accordion.Header>
            <Accordion.Body>
              Products that are deemed non-fresh/spoilt are allowed to be sent
              back to JaraDey for a replacment of the same product.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Can I book a delivery in advance?
            </Accordion.Header>
            <Accordion.Body>
              Deliverys can be planned for a maximum one week in advance,
              although the ammount of items that can be ordered have no limit
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
