'use client';

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyAddressProps = {
  title: string;
  address: string;
};

export default function CopyAddress({ title, address }: CopyAddressProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className='flex-1'>
        <p className='text-sm text-gray-500 dark:text-gray-400'>{title}</p>
        <div className='flex items-center'>
          <p className='font-medium'>{address}</p>
          <button
            onClick={copyToClipboard}
            className='ml-2 rounded-md p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700'
            aria-label='Copy address'
          >
            {copied ? (
              <Check className='h-4 w-4 text-green-500' />
            ) : (
              <Copy className='h-4 w-4 text-gray-400' />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
