import ObsWebSocket from "obs-websocket-js";
import store from "../store/index";
import { NotificationProgrammatic as Notification } from "buefy";

const obs = new ObsWebSocket();
obs
  .connect({
    address: window.localStorage.address,
    password: window.localStorage.password,
  })
  .then(() => {
    Notification.open("Connecting!");
  })
  .catch(() => {});

obs.on("ConnectionOpened", () => {
  store.state.obsWebSocket.connectionStatus.connection = true;
  Notification.open({
    message: "Connection open!",
    type: "is-success",
  });
});

obs.on("AuthenticationSuccess", () => {
  store.state.obsWebSocket.connectionStatus.authentication = true;
  Notification.open({
    message: "Authentication succesful!",
    type: "is-success",
  });
});
obs.on("ConnectionClosed", () => {
  store.state.obsWebSocket.connectionStatus.connection = false;
  Notification.open({
    message: "Connection lose!",
    type: "is-danger",
  });
});
obs.on("AuthenticationFailure", () => {
  store.state.obsWebSocket.connectionStatus.authentication = false;
  Notification.open({
    message: "Authentication failed or red!",
    type: "is-danger",
  });
});

export default obs;
