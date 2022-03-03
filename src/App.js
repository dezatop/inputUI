import InputRange from "./Components/inputRange";
import {useState} from "react";

function App() {

    const [value, setValue] = useState(0)

  return (
    <div>
      <InputRange
          value={value}
          setValue={setValue}
          color={'#FF781D'}
      />
    </div>
  );
}

export default App;
