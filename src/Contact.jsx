import React, { useState } from "react";
import "./Contact.css";
import { contactsData } from "./utility";
import Card from "./Card";
function Contact() {
  const [search, setSearch] = useState("");
  const returnedFilter = contactsData.filter(
    (value) => value.contact === 9234567602
  );
  const returnedMap = contactsData.map((value) => value.contact === 9234567602);
  console.log(returnedFilter);
  console.log(returnedMap);
  return (
    <div>
      <div className="upperPart">
        <input
          type="text"
          className="textBox"
          placeholder="Search name/ contact number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="outerContainer">
        {contactsData
          .filter(
            (value) =>
              value.name.toLowerCase().includes(search.toLowerCase()) ||
              value.contact.toString().includes(search)
          )
          .map((value, index) => {
            return <Card data={value} key={index} />;
          })}
      </div>
    </div>
  );
}

export default Contact;
