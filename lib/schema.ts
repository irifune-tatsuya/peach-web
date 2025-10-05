import { z } from 'zod';

export const contactFormSchema = z.object({
  lastname: z.string().min(1, '姓をご入力ください').max(10, '10文字以内で入力してください'),
  firstname: z.string().min(1, '名をご入力ください').max(10, '10文字以内で入力してください'),
  company: z.string().max(50, '50文字以内で入力してください').optional(),
  email: z
    .string()
    .min(1, 'メールアドレスをご入力ください')
    .email('正しい形式でメールアドレスをご入力してください')
    .max(50, '50文字以内で入力してください'),
  phone: z.string().max(13, '13文字以内で入力してください').optional(),
  message: z.string().min(1, 'お問い合わせ内容をご入力ください'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const startMailMagazineSchema = z.object({
  lastname: z.string().min(1, '姓をご入力ください').max(10, '10文字以内で入力してください'),
  firstname: z.string().min(1, '名をご入力ください').max(10, '10文字以内で入力してください'),
  company: z.string().max(50, '50文字以内で入力してください').optional(),
  email: z
    .string()
    .min(1, 'メールアドレスをご入力ください')
    .email('正しい形式でメールアドレスをご入力してください'),
});

export type StartMailMagazineValues = z.infer<typeof startMailMagazineSchema>;

export const stopMailMagazineSchema = z.object({
  email: z
    .string()
    .min(1, 'メールアドレスをご入力ください')
    .email('正しい形式でメールアドレスをご入力してください')
    .max(50, '50文字以内で入力してください'),
});

export type StopMailMagazineValues = z.infer<typeof stopMailMagazineSchema>;
