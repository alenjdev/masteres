import Table from "./component/Table/Table";
import "./App.css";
import { useLayoutEffect, useState } from "react";
import { Authentication, Fleet, Device } from "@formant/data-sdk";

function App() {
  const [device, setDevice] = useState<undefined | Device>();

  useLayoutEffect(() => {
    getCurrentDevice();
  }, []);

  const getCurrentDevice = async () => {
    if (await Authentication.waitTilAuthenticated()) {
      const current = await Fleet.getCurrentDevice();
      setDevice(current);
    }
  };
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
