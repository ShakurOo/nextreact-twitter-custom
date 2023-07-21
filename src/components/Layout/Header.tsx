import Link from 'next/link';

import { getSession } from '../../lib/auth/nextAuth';
import { SignInButton, SignOutButton, SignUpButton } from './AuthButtons';

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-2 border-b border-b-gray-700 p-2">
      <Link href="/" className="text-2xl font-bold text-blue-300">
        Twitter
      </Link>
      <div>
        {/* @ts-expect-error Server Component */}
        <User />
      </div>
    </header>
  );
};

const User = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    return (
      <>
        <div className="mx-2 inline-block">
          <SignInButton />
        </div>
        <div className="mx-2 inline-block">
          <SignUpButton />
        </div>
      </>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link href={`/users/${user.id}`} className="text-xs text-neutral-300">
        {user.email}
      </Link>
      <SignOutButton />
    </div>
  );
};
