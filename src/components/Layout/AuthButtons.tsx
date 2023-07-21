'use client';

import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';

export const SignInButton = () => {
  return (
    <button onClick={() => signIn()} className="text-blue-300">
      Login
    </button>
  );
};

export const SignOutButton = () => {
  return (
    <button onClick={() => signOut()} className="text-blue-300">
      Logout
    </button>
  );
};

export const SignUpButton = () => {
  return (
    <Link href="/users/new" className="text-blue-300">
      Create
    </Link>
  );
};
