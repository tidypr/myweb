import { Input } from '../ui/input';
import { Label } from '../ui/label';

type FormInputProps = {
  name: string;
  label: string;
  placeholder: string;
};

export default function FormInput({
  name,
  label,
  placeholder,
}: FormInputProps) {
  return (
    <div className='flex flex-col gap-2'>
      <Label htmlFor={name} className='pl-1 text-sm font-medium'>
        {label || name}
      </Label>
      <Input
        required
        type='text'
        name={name}
        id={name}
        className='rounded-lg border border-gray-200 px-4 py-3 placeholder-gray-400 transition focus:ring-2 focus:outline-none'
        placeholder={placeholder}
      />
    </div>
  );
}
