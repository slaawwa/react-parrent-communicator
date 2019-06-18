import React from 'react';

export default function({ selectedDay }) {
  return (
    <div>
      <h5>Modal</h5>
      { selectedDay || null }
    </div>
  );
}
