import { Field } from "~/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function SelectComponent({
  value,
  onChange,
  options,
  placeholder,
  isError,
}: {
  value?: number;
  onChange: (val: number) => void;
  options: number[];
  placeholder: string;
  isError?: boolean;
}) {
  return (
    <Field data-invalid={isError}>
      <Select
        onValueChange={(val) => onChange(Number(val))}
        value={value ? String(value) : undefined}
      >
        <SelectTrigger aria-invalid={isError} className="h-15! w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => (
            <SelectItem key={item} value={String(item)}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}
