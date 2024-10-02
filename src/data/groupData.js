import {
  GROUP as GROUP32,
  evenLessons as evenLessons32,
  oddLessons as oddLessons32,
} from "./io-32";

import { GROUP as examGROUP32, exams as exams32 } from "./io-32exams";

import IO32Image from "../assets/chat_logo_io-32.jpg";

const groupData = {
  [GROUP32]: {
    data: GROUP32,
    image: IO32Image,
    evenLessons: evenLessons32,
    oddLessons: oddLessons32,
    allowPwaZoom: true,
  },
};

const examsData = {
  [GROUP32]: {
    data: examGROUP32,
    exams: exams32,
    allowPwaZoom: true,
  },
};

export { groupData, examsData };
