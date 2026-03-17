import { Input } from "~/components/ui/input";
import type { Route } from "./+types/login";
import { Button } from "~/components/ui/button";
import FacebookIcon from "~/components/icon/FacebookIcon";
import { dataFooterLogin } from "./consts/login";
import { useForm } from "react-hook-form";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Login() {
  const items = dataFooterLogin;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form
      className="grid grid-cols-3 py-6 px-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-2 relative h-[90vh]">
        <div className="flex flex-col justify-between w-82.5 h-full">
          <FacebookIcon />
          <div className="text-[72px] leading-18 font-semibold">
            Khám phá những điều{" "}
            <span className="text-[#1877F2]">bạn yêu thích</span>.
          </div>
        </div>
        <img
          className="absolute right-0 top-0.5 -translate-0.5 min-h-147.5 h-[calc(100vh-70px)]"
          src="/images/login/HpEiFYDux5j.webp"
          alt="bg login"
        />
      </div>
      <div className="pl-6 flex flex-col justify-center gap-4">
        <div className="font-semibold">Đăng nhập vào Facebook</div>
        <div>
          <Input
            {...register("email", {
              required: "Không được để trống trường này",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email không đúng định dạng",
              },
            })}
            aria-invalid={!!errors.email}
            placeholder="Email hoặc số di động"
            className="h-15"
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {errors.email.message + ""}
            </div>
          )}
        </div>
        <div>
          <Input
            {...register("password", {
              required: "Không được để trống trường này",
              minLength: {
                value: 6,
                message: "Mật khẩu không được ít hơn 6 ký tự",
              },
            })}
            aria-invalid={!!errors.password}
            placeholder="Mật khẩu"
            className="h-15"
          />
          {errors.password && (
            <div className="text-red-500 text-sm mt-1">
              {errors.password.message + ""}
            </div>
          )}
        </div>
        <Button type="submit" size="lg" className="h-11 rounded-full">
          Đăng nhập
        </Button>
        <Button size="lg" variant="ghost" className="h-11 rounded-full">
          Quên mật khẩu?
        </Button>
        <Button size="lg" variant="outline" className="mt-8 h-11 rounded-full">
          Tạo tài khoản mới?
        </Button>
      </div>
      <div className="col-span-3">
        <div className="mt-10 px-40">
          {items.map((item, idx) => (
            <span className="mr-4" key={idx}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </form>
  );
}
