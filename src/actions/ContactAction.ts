'use server';
import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';
import { ContactValidate } from '@/lib/validation';
import { ContactFormState } from '@/types/form';

export async function formActions(
  prevSaet: ContactFormState,
  formData: FormData
) {
  const validateResult = ContactValidate.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });
  if (!validateResult.success) {
    const errors = {
      errors: validateResult.error.flatten().fieldErrors,
      message: 'フォームに正しく入力してください',
    };
    return errors;
  }
  const { name, email, message } = validateResult.data;

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
  try {
    await transporter.sendMail(toHostMailData);
  } catch (error) {
    return {
      errors: {},
      message: '送信に失敗しました。時間をおいて再度お試しください。',
    };
  }
  redirect('/success');
}
