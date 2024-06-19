import { startTransition } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/ErrorPage.module.scss";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    startTransition(() => {
      navigate(path);
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <h1>Сторінка не існує</h1>
        <p>Перевірте коректність введення URL-адреси</p>
      </div>
      <div className={styles.cards}>
        <Card isPressable onPress={() => handleNavigate("/lessons-schedule")}>
          <CardBody>
            <b>Розклад груп</b>
          </CardBody>
        </Card>
        <Card
          isPressable
          onPress={() => handleNavigate("/lessons-schedule/exams")}
        >
          <CardBody>
            <b>Іспити груп</b>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
