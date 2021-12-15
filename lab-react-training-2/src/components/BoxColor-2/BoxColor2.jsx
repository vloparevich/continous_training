import React from 'react';

export default function BoxColor2(propsAndAnythingYouWant) {
  const { r, g, b } = propsAndAnythingYouWant;
  return (
    <div style={{ backgroundColor: `rgb(${r},${g}, ${b})` }}>
      <div style={{ color: '#fff' }}>
        R{r} G{g} B{b}
      </div>
    </div>
  );
}
