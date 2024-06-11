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

import {
  GROUP as examGROUP32,
  exams as exams32,
} from "./io-32exams";
import {
  GROUP as examGROUP35,
  exams as exams35,
} from "./io-35exams";

import IO32Image from "../assets/chat_logo_io-32.jpg";
import IO35Image from "../assets/chat_logo_io-35.jpg";

const groupData = {
  [GROUP32]: {
    data: GROUP32,
    image: IO32Image,
    evenLessons: evenLessons32,
    oddLessons: oddLessons32,
    allowPwaZoom: true,
  },
  [GROUP35]: {
    data: GROUP35,
    image: IO35Image,
    evenLessons: evenLessons35,
    oddLessons: oddLessons35,
    allowPwaZoom: false,
  },
};

const examsData = {
  [GROUP32]: {
    data: examGROUP32,
    exams: exams32,
    allowPwaZoom: true,
  },
  [GROUP35]: {
    data: examGROUP35,
    exams: exams35,
    allowPwaZoom: false,
  },
};

export { groupData, examsData };
