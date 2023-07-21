import { User } from '@prisma/client';

export const UserFormContent = ({ username, email }: Partial<Pick<User, 'email' | 'username'>>) => {
  return (
    <>
      <div className="mb-6 mt-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          defaultValue={username || ''}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          defaultValue={email}
        />
      </div>
      <input
        type="submit"
        value={email ? 'Update' : 'Create'}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      />
    </>
  );
};
