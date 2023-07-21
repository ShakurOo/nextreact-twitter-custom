import React from 'react';

import UserForm from '../UserForm';
import { UserFormContent } from '../UserFormContent';

export default function NewUser() {
  return (
    <div className="py-10">
      <h1 className="text-2xl">Create a user</h1>
      <UserForm>
        <UserFormContent />
      </UserForm>
    </div>
  );
}
