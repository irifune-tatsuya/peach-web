import { draftMode } from 'next/headers';
import { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';
import { getDetail } from '@/libs/microcms';

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const slug = searchParams.get('slug');
  const draftKey = searchParams.get('draftKey');

  if (!slug || !draftKey) {
    return new Response('Invalid slug, draftKey, or type', { status: 400 });
  }

  const draftKeyQuery = `?draftKey=${draftKey}`;
  const data = await getDetail(slug, { draftKey });

  if (!data) {
    return new Response(`Article not found for slug: ${slug}`, {
      status: 404,
    });
  }

  const categoryId = data.category?.id;

  let path = '/';
  switch (categoryId) {
    case 'news':
      path = `/news/${data.id}${draftKeyQuery}`;
      break;
    case 'peach-fight':
      path = `/peach-fight/${data.id}${draftKeyQuery}`;
      break;
    case 'faq':
      path = `/faq/${data.id}${draftKeyQuery}`;
      break;
    case 'article':
      path = `/article/${data.id}${draftKeyQuery}`;
      break;
    default:
      return new Response('Invalid category', { status: 400 });
  }

  (await draftMode()).enable();
  redirect(path);
};
