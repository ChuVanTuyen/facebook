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
import { dataFooterLogin } from "./consts/login";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getDaysInMonth } from "~/lib/utils";
import { Field } from "~/components/ui/field";

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
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<RegisterValue>({
    mode: "onTouched",
  });
  const onSubmit = (data: RegisterValue) => {
    console.log(data);
  };

  const currentYear = dayjs().year();
  const year = watch("dateOfBird.year");
  const month = watch("dateOfBird.month");
  const day = watch("dateOfBird.day");

  const years = Array.from({ length: 120 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const [days, setDays] = useState<number[]>(
    Array.from({ length: 31 }, (_, i) => i + 1),
  );

  useEffect(() => {
    if (!year || !month) return;

    const totalDays = getDaysInMonth(year, month);
    const newDays = Array.from({ length: totalDays }, (_, i) => i + 1);
    setDays(newDays);

    if (day && day > totalDays) {
      setValue("dateOfBird.day", totalDays);
    }
  }, [year, month]);

  const validateDate = () => {
    if (!day || !month || !year) {
      return "Select your date of birth. You can change who can see this later.";
    }
    return true;
  };

  return (
    <div>
      <div className="max-w-150 px-3 py-10 mx-auto">
        <div className="-ml-3 p-2 w-10 h-10 text-2xl rounded-full text-[#666A72] hover:bg-gray-100">
          <ArrowLeftIcon />
        </div>
        <MetaIcon className="w-15 h-3 mt-2" />
        <div className="text-2xl font-semibold mt-4">
          Get started on Facebook
        </div>
        <div className="leading-5 mt-1">
          Create an account to connect with friends, family and communities of
          people who share your interests.
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="font-semibold mt-3">Name</div>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div>
              <Input
                {...register("firstName", {
                  required: "What's your first name?",
                })}
                aria-invalid={!!errors.firstName}
                placeholder="First name"
                className="h-15 w-full"
              />
              {errors.firstName && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.firstName.message + ""}
                </div>
              )}
            </div>
            <div>
              <Input
                {...register("lastName", {
                  required: "What's your surname?",
                })}
                aria-invalid={!!errors.lastName}
                placeholder="Surname"
                className="h-15 w-full"
              />
              {errors.lastName && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.lastName.message + ""}
                </div>
              )}
            </div>
          </div>
          <div className="mt-3 mb-1 font-semibold">
            Date of bird <CircleQuestionIcon className="inline-block h-6 w-6" />
          </div>
          <div className="grid grid-cols-3 gap-x-2">
            <Controller
              name="dateOfBird.day"
              control={control}
              rules={{ validate: validateDate }}
              render={({ field }) => (
                <Field data-invalid>
                  <Select
                    onValueChange={(val) => field.onChange(Number(val))}
                    value={field.value ? field.value + "" : undefined}
                  >
                    <SelectTrigger
                      className="h-15! w-full"
                      aria-invalid={!!errors.dateOfBird?.day}
                    >
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map((item, idx) => (
                        <SelectItem value={item + ""} key={idx}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
            <Controller
              name="dateOfBird.month"
              control={control}
              rules={{ validate: validateDate }}
              render={({ field }) => (
                <Field data-invalid>
                  <Select
                    onValueChange={(val) => field.onChange(Number(val))}
                    value={field.value ? field.value + "" : undefined}
                  >
                    <SelectTrigger
                      className="h-15! w-full"
                      aria-invalid={!!errors.dateOfBird?.month}
                    >
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((item, idx) => (
                        <SelectItem value={item + ""} key={idx}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
            <Controller
              name="dateOfBird.year"
              control={control}
              rules={{ validate: validateDate }}
              render={({ field }) => (
                <Field data-invalid>
                  <Select
                    onValueChange={(val) => field.onChange(Number(val))}
                    value={field.value ? field.value + "" : undefined}
                  >
                    <SelectTrigger
                      className="h-15! w-full"
                      aria-invalid={!!errors.dateOfBird?.year}
                    >
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((item, idx) => (
                        <SelectItem value={item + ""} key={idx}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
            {errors.dateOfBird?.day && (
              <p className="col-span-3 text-red-500 text-sm mt-1">
                {errors.dateOfBird.day.message}
              </p>
            )}
          </div>

          <div className="mt-3 mb-1 font-semibold">
            Gender <CircleQuestionIcon className="inline-block h-6 w-6" />
          </div>

          <Controller
            name="gender"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Field data-invalid>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className="h-15! w-full"
                    aria-invalid={!!errors.gender}
                  >
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Male</SelectItem>
                    <SelectItem value="2">Female</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            )}
          />
          {errors.dateOfBird?.day && (
            <p className="col-span-3 text-red-500 text-sm mt-1">
              Please choose a gender. You can change who can see this later.
            </p>
          )}

          <div className="mt-3 mb-1 font-semibold">Email address</div>

          <Input
            {...register("email", {
              required: "Please enter a valid mobile number or email address.",
            })}
            aria-invalid={!!errors.email}
            placeholder="Email"
            className="h-15"
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {errors.email.message + ""}
            </div>
          )}

          <div className="text-[15px] mt-1">
            You may receive notifications from us.{" "}
            <span className="font-semibold text-[#0064E0]">
              Learn why we ask for your contact information
            </span>
          </div>

          <div className="mt-3 mb-1 font-semibold">Password</div>
          <Input
            {...register("password", {
              required: "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &).",
            })}
            aria-invalid={!!errors.email}
            placeholder="Password"
            className="h-15"
          />
          {errors.password && (
            <div className="text-red-500 text-sm mt-1">
              {errors.password.message + ""}
            </div>
          )}

          <div className="mt-4">
            <p>
              People who use our service may have uploaded your contact
              information to Facebook.{" "}
              <span className="font-semibold text-[#0064E0]">Learn more</span>.
            </p>
            <p className="mt-2">
              By tapping Submit, you agree to create an account and to
              Facebook's{" "}
              <span className="font-semibold text-[#0064E0]">Terms</span>,{" "}
              <span className="font-semibold text-[#0064E0]">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#0064E0]">
                Cookies Policy
              </span>
              .
            </p>
            <p className="mt-2">
              The{" "}
              <span className="font-semibold text-[#0064E0]">
                Privacy Policy
              </span>{" "}
              describes the ways we can use the information we collect when you
              create an account. For example, we use this information to
              provide, personalise and improve our products, including ads.
            </p>
          </div>

          <Button
            className="h-11 w-full rounded-full mt-4"
            size="lg"
            type="submit"
          >
            Submit
          </Button>
          <Button
            className="h-11 w-full rounded-full mt-3"
            size="lg"
            type="submit"
            variant="outline"
          >
            Cancel
          </Button>
        </form>
      </div>
      <div className="max-w-250 w-[95vh] mx-auto text-gray-700 pb-10">
        {dataFooterLogin.map((item, idx) => (
          <span className="mr-4" key={idx}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
