import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router";
import { AuthLayout } from "./ui/auth-layout";
import { RegisterForm } from "./ui/register-form";

function RegisterPage() {
  return (
    <AuthLayout
      title="Регистрация"
      description="Введите ваш email и пароль для регистрации в системе"
      form={<RegisterForm />}
      footer={
        <>
          Уже есть аккаунт? <Link to={ROUTES.LOGIN}>Войти</Link>
        </>
      }
    />
  );
}

export const Component = RegisterPage;
