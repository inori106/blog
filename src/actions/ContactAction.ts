'use server';
import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';
import { ContactValidate } from '@/lib/validation';

export async function formActions(prevSaet: any, formData: FormData) {
  const validateResult = ContactValidate.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });
  if (!validateResult.success) {
    const errors = {
      errors: validateResult.error.flatten().fieldErrors,
      message: 'Failed to validate',
    };
    return errors;
  }
  const { name, email, message } = validateResult.data;
  redirect('/');

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODE_MAILER_ADDRESS,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
  });

  const toHostMailData = {
    from: email,
    to: process.env.MAIL_ADDRESS,
    subject: `[お問い合わせ] ${name}様より`,
    html: `
    <P>${name}様からお問い合わせがありました。</p>
    <p>メールアドレス: ${email}</p>
    <p>${message}</p>`,
  };

  transporter.sendMail(toHostMailData, (error, info) => {});
}
