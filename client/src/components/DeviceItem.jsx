import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import StarIcon from "../assets/star.svg";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  console.log(device);

  const navigate = useNavigate();

  return (
    <Col md={3} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + device.img}
        />
        <div className="text-black-50 d-flex justify-content-between mt-2">
          <div>{device.brandId}</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={StarIcon} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
