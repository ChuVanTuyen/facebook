import { Input } from "~/components/ui/input";
import type { Route } from "./+types/register";
import { Controller, useForm } from "react-hook-form";
import { ArrowLeftIcon } from "~/components/icon/ArrowLeftIcon";
import { MetaIcon } from "~/components/icon/MetaIcon";
import CircleQuestionIcon from "~/components/icon/CircleQuestionIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";

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
    setValue,
    control,
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
        <div className="flex gap-2 mt-1">
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
        <div className="mt-3 mb-1 font-semibold">
          Date of bird <CircleQuestionIcon className="inline-block h-6 w-6" />
        </div>
        <div className="flex gap-2">
          <Controller
            name="dateOfBird.day"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="h-15! w-full">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <Controller
            name="dateOfBird.month"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="h-15! w-full">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <Controller
            name="dateOfBird.year"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="h-15! w-full">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
