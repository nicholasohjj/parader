import React from "react";

const style = {
  padding: 0,
  margin: 0
};

const Excuse = ({ person }) => {
  if (person.excuse && person.excuse !== 'nil') {
    return <>({person.excuse})</>;
  } else {
    return null;
  }
};

const Excuses = ({ persons }) => {
  const ExcuseList = persons.filter(person => person.excuse && person.excuse !== 'nil');
  console.log(`List of personnel with excuses: ${JSON.stringify(ExcuseList)}`);
  const currentStrength = ExcuseList.length;

  return (
    <div>
      <p style={style}>PERSONNEL WITH MEDICAL EXCUSES: {currentStrength}</p>
      {ExcuseList.map((person, index) => (
        <p style={style} key={person.name}>
          {index + 1}. {person.name} <Excuse person={person} />
        </p>
      ))}
    </div>
  );
};

export default Excuses;
