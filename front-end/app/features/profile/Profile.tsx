import { Button } from "~/components/ui/button";
import type { Route } from "./+types/Profile";
import CameraIcon from "~/components/icon/CameraIcon";
import LocationPin from "~/components/icon/LocationPin";
import ArrowDownIcon from "~/components/icon/ArrowDownIcon";
import AddIcon from "~/components/icon/AddIcon";
import { EditIcon } from "~/components/icon/EditIcon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Profile() {
  return (
    <div className="container mx-auto max-w-312.5">
      <div className="h-116 relative">
        <img
          className="object-cover h-full w-full rounded-b-md"
          src="/profile/anh-nen-may-tinh-4k-1.jpg"
          alt="Ảnh bìa"
        />
        <Button variant="secondary" className="absolute bottom-4 right-4">
          <CameraIcon />
          Chỉnh sửa ảnh bìa
        </Button>
      </div>
      <div className="flex items-center w-full gap-6 pt-6">
        <img
          src="/profile/453178253_471506465671661_2781666950760530985_n.png"
          alt="avatar"
          className="rounded-full h-42 w-42 border border-[#c4c4c4]"
        />
        <div className="w-full">
          <div className="flex justify-between">
            <span className="text-[32px] font-bold">Nguyễn Viết Tuân</span>
            <div className="flex gap-2">
              <Button className="h-9 font-semibold">
                <AddIcon /> Thêm vào tin
              </Button>
              <Button className="h-9 font-semibold" variant="secondary">
                <EditIcon /> Chỉnh sửa trang cá nhân
              </Button>
              <Button className="h-9 w-12 font-semibold" variant="secondary">
                <ArrowDownIcon />
              </Button>
            </div>
          </div>
          <div>Nice</div>
          <div className="font-medium">
            <LocationPin className="inline-block w-3" /> Hà Nội
          </div>
        </div>
      </div>
    </div>
  );
}
