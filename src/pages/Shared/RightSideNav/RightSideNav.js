import React from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-2">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
