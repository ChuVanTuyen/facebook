import { Input } from "~/components/ui/input";
import type { Route } from "./+types/register";
import { Button } from "~/components/ui/button";
import { useForm } from "react-hook-form";
import { ArrowLeftIcon } from "~/components/icon/ArrowLeftIcon";
import { MetaIcon } from "~/components/icon/MetaIcon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="max-w-150 px-3 py-10 mx-auto">
      <div className="p-2 w-10 h-10 text-2xl rounded-full text-[#666A72] hover:bg-gray-100">
        <ArrowLeftIcon />
      </div>
      <MetaIcon className="w-15 h-3 mt-2" />
      <div className="text-2xl font-semibold mt-4">Get started on Facebook</div>
      <div className="leading-5 mt-1">
        Create an account to connect with friends, family and communities of
        people who share your interests.
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="font-semibold mt-3">Name</div>
        <div className="flex gap-2">
          <Input
            {...register("firstName", {
              required: "Không được để trống trường này",
            })}
            aria-invalid={!!errors.email}
            placeholder="First name"
            className="h-15"
          />
          <Input
            {...register("lastName", {
              required: "Không được để trống trường này",
            })}
            aria-invalid={!!errors.email}
            placeholder="Surname"
            className="h-15"
          />
        </div>
      </form>
    </div>
  );
}
