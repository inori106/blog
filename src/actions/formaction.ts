'use server';
import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';
import validate from '@/lib/validation';

export async function formActions(formData: FormData) {
  const name = String(formData.get('name'));
  const email = String(formData.get('email'));
  const message = String(formData.get('message'));
  let flag = true;

  await new Promise((resolve) => setTimeout(resolve, 2000));

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

  transporter.sendMail(toHostMailData, (error, info) => {
    if (error) {
      console.log(error);
      flag = false;
    } else {
      console.log('Email sent: ' + info.response);
      flag = true;
    }
  });
  return flag;
}
