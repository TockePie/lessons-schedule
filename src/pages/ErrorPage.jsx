import { startTransition } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    startTransition(() => {
      navigate(path);
    });
  };

  return (
    <main className="flex flex-col gap-6 items-center justify-center">
      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-4xl font-black">Сторінка не існує</h1>
        <p className="flex text-2xl text-center p-5">
          Перевірте коректність введення URL-адреси
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-96">
        <Card isPressable onPress={() => handleNavigate("/")}>
          <CardBody>
            <b className="mt-auto mb-auto text-center text-xl p-2">
              Розклад груп
            </b>
          </CardBody>
        </Card>
        <Card isPressable onPress={() => handleNavigate("/exams")}>
          <CardBody>
            <b className="mt-auto mb-auto text-center text-xl p-2">
              Іспити груп
            </b>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
