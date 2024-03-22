"use client";
import { Container, Image, Row, Col, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./../styles/Common.module.css";
function Footer() {
  return (
    <Container fluid className={styles.footerContainer}>
      <Row className={styles.row}>
        <Col className="col-md-5 mx-auto">
          
            <Image
              src="https://zing.me/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fja05re24tfdf%2F1BSv5WKQJauZ6jgToHeLy5%2Ff7fbab21c69f81beebddacd004c50209%2FFounding_member.png&w=1920&q=75"
              loading="lazy"
              alt="zing logo"
              width={70}
              height={40}
            />
            <p className={styles.footer_name}>Zing by HSBC</p>
         
        </Col>
        <Col className="col-md-5 mx-auto">
          <p className={`col-md-5 mx-auto ${styles.footer_name}`}>Follow us</p>
          <Stack className="col-md-5 mx-auto" direction="horizontal" gap={3}>
            <a
              className={`btn btn-primary ${styles.btn_fb}`}
              href="https://www.facebook.com/HSBCHK/"
              role="button"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className={`btn btn-primary ${styles.btn_twitter}`}
              href="https://twitter.com/hsbc_hk?lang=en"
              role="button"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className={`btn btn-primary ${styles.btn_Insta}`}
              href="https://www.instagram.com/hsbc_hk/?hl=en"
              role="button"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Stack>
        </Col>
      </Row>
      <Row>
        <p className={styles.footer_text}>
          Zing is provided by MP Payments UK Limited, a company registered in
          England and Wales with registered company number 14263447 and its
          registered office at 8 Canada Square, London, E14 5HQ. MP Payments UK
          Limited's registered VAT number is GB365684514.
        </p>
      </Row>
    </Container>
  );
}

export default Footer;
