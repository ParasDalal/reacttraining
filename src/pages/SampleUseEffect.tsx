import React, { useEffect, useState } from "react";

function SampleUseEffect() {
  const [value, setValue] = useState("Initial");

  function sleep(milliseconds: number) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  useEffect(() => {
    sleep(2000);
    setValue("Now Changed");
    return () => {
      // Clean up the subscription
      //subscription.unsubscribe();
    };
  }, [value]);
  return (
    <div>
      <div>This is the value: {value}</div>
      <br />
      <button onClick={() => setValue("Button pressed")}>Press Me</button>
    </div>
  );
}

export default SampleUseEffect;
