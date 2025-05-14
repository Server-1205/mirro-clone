import { Link } from "react-router";
import { AuthLayout } from "./ui/auth-layout";
import { ROUTES } from "@/shared/model/routes";
import { LoginForm } from "./ui/login-form";

function LoginPage() {
  return (
    <AuthLayout
      title="Воити в систему"
      description="Введите ваш email и пароль для входа в систему"
      form={<LoginForm />}
      footer={
        <>
          Нет аккаунта? <Link to={ROUTES.REGISTER}>Зарегистрироваться</Link>
        </>
      }
    />
  );
}

export const Component = LoginPage;
