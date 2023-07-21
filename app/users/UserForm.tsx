'use client';
import { useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

export default function UserForm({ children, userId }: PropsWithChildren<{ userId?: string }>) {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const updatedUser = {
      username: formData.get('username') as string,
      email: formData.get('email') as string,
    };

    fetch(userId ? `/api/users/${userId}` : '/api/users/new', {
      method: userId ? 'PATCH' : 'POST',
      body: JSON.stringify(updatedUser),
    })
      .then(res => res.json())
      .then(() => {
        router.refresh();
        router.push('/');
      })
      .catch(() => {
        alert(`Can not ${userId ? 'update' : 'create'} user ` + userId);
      });
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}
