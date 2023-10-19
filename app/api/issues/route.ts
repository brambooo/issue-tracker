import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  console.log("newIssue", newIssue);

  return NextResponse.json(newIssue, { status: 201 });
}

// import { NextRequest, NextResponse } from 'next/server';
// import prisma from '@/prisma/client';
// import { issueSchema } from '../../validationSchemas';
// import { getServerSession } from 'next-auth';
// import authOptions from '@/app/auth/authOptions';

// export async function POST(request: NextRequest) {
//   const session = await getServerSession(authOptions);
//   if (!session)
//     return NextResponse.json({}, { status: 401 });

//   const body = await request.json();
//   const validation = issueSchema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.format(), { status: 400 });

//   const newIssue = await prisma.issue.create({
//     data: { title: body.title, description: body.description },
//   });

//   return NextResponse.json(newIssue, { status: 201 });
// }