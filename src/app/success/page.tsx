import { LuThumbsUp } from 'react-icons/lu';

export default function SuccessPage() {
  return (
    <div className='flex justify-center items-center mx-auto'>
      <div className='container mx-auto dark:text-gray-200 text-center'>
        <LuThumbsUp color='green' size={80} className='mx-auto text-center' />
        <h1 className='text-4xl font-bold py-10'>Thank you!</h1>
        <p className='text-lg'>
          We appreciate your submission.
          <br />
          We&apos;ll review it and get back to you soon.
        </p>
      </div>
    </div>
  );
}
