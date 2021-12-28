import ObsWebSocket from "obs-websocket-js";
import store from "../store/index";

const obs = new ObsWebSocket();
obs
  .connect({
    address: "192.168.1.124:4444",
    password: "alakara12",
  })
  .then(() => {
    console.log(`Success! We're connected & authenticated.`);
  });

setInterval(() => {
  if (!store.state.obsWebSocket.connectionStatus.connection) {
    obs.connect({
      address: "192.168.1.125:4444",
      password: "alakara12",
    });
  }
}, 15000);

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
