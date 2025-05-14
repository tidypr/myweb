import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type FormTextAreaProps = {
  name: string;
  label: string;
  placeholder: string;
  rows?: number;
};

export default function FormTextArea({
  name,
  label,
  placeholder,
}: FormTextAreaProps) {
  return (
    <div className='flex flex-col gap-2'>
      <Label htmlFor={name} className='pl-1 text-sm font-medium'>
        {label || name}
      </Label>
      <Textarea
        required
        // rows={rows}
        name={name}
        id={name}
        className='rounded-lg border border-gray-200 px-4 py-3 placeholder-gray-400 transition focus:ring-2 focus:outline-none'
        placeholder={placeholder}
      />
    </div>
  );
}
