import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Admin.css";

const AccordionInfo = ({ info }) => {
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        className="member-accordion"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            Name: {info.firstName + " " + info.lastName} | {info.membership}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="member-info">
              <li>Email: {info.email}</li>
              <li>Phone: {info.phone}</li>
              <li>
                Address:{" "}
                {info.address +
                  ", " +
                  info.city +
                  "-" +
                  info.postCode +
                  ", " +
                  info.country}
              </li>
              <li>Birth Date: {info.birthdayDate}</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionInfo;
