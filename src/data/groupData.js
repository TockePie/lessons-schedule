import {
  GROUP as GROUP32,
  evenLessons as evenLessons32,
  oddLessons as oddLessons32,
} from "./io-32";
import {
  GROUP as GROUP35,
  evenLessons as evenLessons35,
  oddLessons as oddLessons35,
} from "./io-35";

import IO32Image from "../assets/chat_logo_io-32.jpg";
import IO35Image from "../assets/chat_logo_io-35.jpg";

const groupData = {
  "ІО-32": {
    data: GROUP32,
    image: IO32Image,
    evenLessons: evenLessons32,
    oddLessons: oddLessons32,
    allowPwaZoom: true,
  },
  "ІО-35": {
    data: GROUP35,
    image: IO35Image,
    evenLessons: evenLessons35,
    oddLessons: oddLessons35,
    allowPwaZoom: false,
  },
};

export default groupData;
