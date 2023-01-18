import { useState } from "react";

export default function FirstPost() {
  const [input, setInput] = useState("");

  return (
    <div>
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.input)}
      />
    </div>
  );
}
