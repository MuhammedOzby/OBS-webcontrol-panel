import ObsWebSocket from "obs-websocket-js";
import store from "../store/index";

const obs = new ObsWebSocket();
obs
  .connect({
    address: window.localStorage.address,
    password: window.localStorage.password,
  })
  .then(() => {
    alert("Connection succesful.");
  })
  .catch(() => {});

obs.on(
  "ConnectionOpened",
  () => (store.state.obsWebSocket.connectionStatus.connection = true)
);

obs.on(
  "AuthenticationSuccess",
  () => (store.state.obsWebSocket.connectionStatus.authentication = true)
);
obs.on(
  "ConnectionClosed",
  () => (store.state.obsWebSocket.connectionStatus.connection = false)
);
obs.on(
  "AuthenticationFailure",
  () => (store.state.obsWebSocket.connectionStatus.authentication = false)
);

export default obs;
