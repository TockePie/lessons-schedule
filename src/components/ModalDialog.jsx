import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Snippet,
} from "@nextui-org/react";

export default function ModalDialog({ isOpen, onClose, data }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Повідомлення</ModalHeader>
        <ModalBody>
          <p>{data.textInDialog}</p>
          <Snippet symbol="→" variant="bordered">
            {data.password}
          </Snippet>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onPress={() => window.open(data.url, "_blank")}
          >
            Відкрити
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
