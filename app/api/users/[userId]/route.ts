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

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   let serializedBody, query;

//   // // ADD A USER
//   // if (req.method === 'POST') {
//   //   try {
//   //     serializedBody = BodyScheme.parse(JSON.parse(req.body));
//   //   } catch (error) {
//   //     res.status(400);
//   //     return;
//   //   }

//   //   const newUser = await prisma.user.create({ data: serializedBody });
//   //   res.status(200).json(newUser);
//   //   return;
//   // }

//   // UPDATE A USER
//   if (req.method === 'PATCH') {
//     try {
//       serializedBody = BodyScheme.parse(JSON.parse(req.body));
//       query = QueryScheme.parse(req.query);
//     } catch (error) {
//       res.status(400);
//       return;
//     }

//     const updateUser = await prisma.user.update({
//       where: {
//         id: query.userId,
//       },
//       data: serializedBody,
//     });

//     res.status(200).json(updateUser);
//     return;
//   }

//   // DELETE A USER
//   if (req.method === 'DELETE') {
//     try {
//       query = QueryScheme.parse(req.query);
//     } catch (error) {
//       res.status(400);
//       return;
//     }

//     const updateUser = await prisma.user.delete({
//       where: {
//         id: query.userId,
//       },
//     });

//     res.status(200).json(updateUser);
//     return;
//   }

//   res.status(405).json({ message: 'Method Not Allowed' });
// }
