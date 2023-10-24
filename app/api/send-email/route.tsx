import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import schema from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailBody {
    to: string,
    subject: string,
    html: string
}

export async function POST(request: NextRequest) {

    const body: EmailBody = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: body.to,
        subject: body.subject,
        html: body.html
    });

    return NextResponse.json({ message: `Successfully sent message to ${body.to}` }, { status: 200 });
}