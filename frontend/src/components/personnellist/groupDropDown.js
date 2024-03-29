import React, { useState } from "react";
import { Icon, Div, Dropdown, Anchor, Notification } from "atomize";
import phoneservice from "../../services/phoneservice";

const Groupdropdown = ({ person, persons, setPersons }) => {
  const [newinfo, setnewinfo] = useState(false);

  const HandleUpdateGroup = (event) => {
    setshowModal(!showModal);

    const value = event.target.getAttribute("value");

    const newPerson = {
      name: person.name,
      status: person.status,
      reason: person.reason,
      group: value,
      excuse: person.excuse,
      role: person.role,
    };

    const nameCheck = persons.filter((person) =>
      person.name.toLowerCase().includes(newPerson.name.toLowerCase())
    );

    if (value) {
      phoneservice
        .update(nameCheck[0].id, newPerson)
        .then((updatedList) => {
          setPersons(
            persons.map((person) =>
              person.id !== nameCheck[0].id ? person : updatedList
            )
          );
          setnewinfo(!newinfo);
        });
    }
  };

  const menuList = (
    <Div p={{ x: "1rem", y: "0.5rem" }} onClick={HandleUpdateGroup}>
      <Anchor d="block" p={{ y: "0.25rem" }} value="hq">
        {"HQ 🏢"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="blueteam">
        {"Blue Team"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="redteam">
        {"Red Team"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="others">
        {"Others"}
      </Anchor>
    </Div>
  );

  const [showModal, setshowModal] = useState(false);

  const Handleclick = () => {
    setshowModal(!showModal);
  };

  return (
    <Div>
      <Notification
        bg="info700"
        isOpen={newinfo}
        onClose={() => {
          setnewinfo(!newinfo);
        }}
        prefix={
          <Icon name="InfoSolid" color="white" size="18px" m={{ r: "0.5rem" }} />
        }
      >
        Group Updated
      </Notification>
      <Dropdown
        w="fit-content"
        isOpen={showModal}
        onClick={Handleclick}
        menu={menuList}
        bg="info100"
        focusBg="info200"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        m={{ r: "0.5rem" }}
        openSuffix={<Icon name="Up" color="info700" size="16px" />}
        closeSuffix={<Icon name="Down" color="info700" size="16px" />}
      >
        Group
      </Dropdown>
    </Div>
  );
};

export default Groupdropdown;
