import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shared/ui/kit/card";
import type { ReactNode } from "react";

interface Props {
  form: ReactNode;
  title: ReactNode;
  description: ReactNode;
  footer: ReactNode;
  className?: string;
}

export const AuthLayout = ({ form, title, description, footer }: Props) => {
  return (
    <main className="grow flex py-[100px] justify-center container mx-auto">
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent>{form}</CardContent>

        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      </Card>
    </main>
  );
};
