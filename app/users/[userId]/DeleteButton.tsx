'use client';

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

export const DeleteButton = ({ userId }: { userId?: string }) => {
  const router = useRouter();

  const handleDeleteUser = async () => {
    await signOut();

    fetch(`/`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        router.refresh();
        router.push('/');
      })
      .catch(() => {
        alert('Can not delete user' + userId);
      });
  };

  return (
    <button onClick={handleDeleteUser} className="text-blue-300">
      Delete my account
    </button>
  );
};
