import io from "socket.io-client";

import { socketEvents } from "./events";
import { connectionEmit } from "./emit";

const { REACT_APP_API_PREFIX } = process.env;

// Constants
const API_PREFIX = REACT_APP_API_PREFIX;

export const socket = io(`${API_PREFIX}`);

export const initSockets = ({ setValue }) => {
  socketEvents({ setValue });
  connectionEmit();
};
