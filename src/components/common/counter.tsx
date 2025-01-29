"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      className="bg-gray-700 rounded-md p-2 w-24 text-white"
      onClick={() => setCount(count + 1)}
    >
      {count} Clicks
    </button>
  );
}
