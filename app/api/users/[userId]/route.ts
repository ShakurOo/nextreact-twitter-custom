import { NextResponse } from 'next/server';
import { z } from 'zod';

import { prisma } from '~/src/db/prisma';

const BodyScheme = z.object({
  username: z.string(),
  email: z.string(),
});

// const QueryScheme = z.object({
//   userId: z.string(),
// });

export const POST = async (request: Request) => {
  let serializedBody;
  try {
    const body = await request.json();
    serializedBody = BodyScheme.parse(body);
  } catch (error) {
    return NextResponse.json({ message: 'Can not parse request body' }, { status: 400 });
  }

  const newUser = await prisma.user.create({ data: serializedBody });
  return NextResponse.json({ data: newUser });
};

export const PATCH = async (request: Request, { params }: { params: { userId: string } }) => {
  let serializedBody;
  try {
    const body = await request.json();
    serializedBody = BodyScheme.parse(body);
  } catch (error) {
    return NextResponse.json({ message: 'Can not parse request body' }, { status: 400 });
  }

  const updateUser = await prisma.user.update({
    where: {
      id: params.userId,
    },
    data: serializedBody,
  });

  return NextResponse.json({ data: updateUser });
};

export const DELETE = async (_: Request, { params }: { params: { userId: string } }) => {
  const updateUser = await prisma.user.delete({
    where: {
      id: params.userId,
    },
  });

  return NextResponse.json({ data: updateUser });
};
