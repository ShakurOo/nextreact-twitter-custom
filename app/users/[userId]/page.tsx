import { redirect } from 'next/navigation';
import React from 'react';

import { prisma } from '~/src/db/prisma';

import UserForm from '../UserForm';
import { UserFormContent } from '../UserFormContent';
import { DeleteButton } from './DeleteButton';
type UserProps = {
  params: {
    userId: string;
  };
};

export default async function User({ params }: UserProps) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.userId,
    },
  });

  if (!user) {
    redirect('/');
    return null;
  }

  return (
    <div className="py-10 flex flex-col">
      <h1 className="text-2xl mb-4">Bonjour {user.username || user.email} 👋🏻</h1>
      <UserForm userId={params.userId}>
        <UserFormContent email={user.email} username={user.username} />
      </UserForm>
      <div className="pt-10">
        <DeleteButton userId={params.userId} />
      </div>
    </div>
  );
}
