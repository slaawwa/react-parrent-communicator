import React from 'react';

const ONE_DAY = 24 * 60 * 60 * 1000;

export default function({ selectedDay, onSelect }) {
  return (
    <div>
      <h5>Calendar</h5>
      {Array(7).fill().map((i, index) => (
        <button
          key={'day_'+index}
          onClick={() => onSelect(new Date(Date.now() + index * ONE_DAY))}
        >
          {new Date(Date.now() + index * ONE_DAY).getDate()}
        </button>
      ))}
      <hr />
      {selectedDay ? selectedDay : null}
    </div>
  );
}
