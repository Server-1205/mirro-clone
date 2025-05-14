import { Button } from "@/shared/ui/kit/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/kit/form";
import { Input } from "@/shared/ui/kit/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../model/use-register";

const registerSchema = z
  .object({
    email: z
      .string({
        required_error: "Email обязателен",
      })
      .email("Не верный email"),
    password: z
      .string({
        required_error: "Пароль обязателен",
      })
      .min(6, "Пароль должен быть не менее 6 символов"),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Пароли не совпадают",
  });

export const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { errorMessage, isPending, register } = useRegister();

  const onSubmit = form.handleSubmit(register);
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="admin@gmail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Повторите пароль</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {errorMessage && (
          <p className="text-destructive text-sm">{errorMessage}</p>
        )}
        <Button disabled={isPending} variant="default" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </Form>
  );
};
