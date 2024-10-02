import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { listOfSelectives, selectives } from "../data/selectives";

const getSelectedValue = () => {
  const value = localStorage.getItem("selectedValue");
  return value ? JSON.parse(value) : null;
};

export default function ChooseLessons({ isOpen, onClose }) {
  const [selectedValue, setSelectedValue] = useState(getSelectedValue());

  useEffect(() => {
    setSelectedValue(getSelectedValue());
  }, []);

  const handleChange = (value) => {
    localStorage.setItem("selectedValue", JSON.stringify(value));
    setSelectedValue(value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Оберіть вибірковий</ModalHeader>
        <ModalBody>
          <RadioGroup value={selectedValue} onValueChange={handleChange}>
            {listOfSelectives.map((selectiveName, index) => (
              <Radio key={index} value={selectiveName}>
                {selectives[selectiveName].lecture.lessonName}
              </Radio>
            ))}
          </RadioGroup>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => onClose()}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
