import { useFormStatus } from 'react-dom';

type Props = {
  pretext?: string;
  loadingtext?: string;
};
const SubmitButton: React.FC<Props> = ({ pretext, loadingtext }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600'
      type='submit'
      disabled={pending}
    >
      {pending ? loadingtext : pretext}
    </button>
  );
};

export default SubmitButton;
