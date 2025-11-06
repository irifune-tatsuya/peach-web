import type { MicroCMSImage, MicroCMSDate, MicroCMSContentId } from 'microcms-js-sdk';

export type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type ArticleCategory = 'article' | 'peach-fight' | 'faq' | 'news';

export type PeachFightDetails = {
  fieldId: 'peach_fight_details';
  subthumbnail?: MicroCMSImage;
  instagramid?: string;
  facebookurl?: string;
  xid?: string;
  lineurl?: string;
  url?: string;
  interviewed?: string;
};

export type CtaButton = {
  fieldId: 'cta_button';
  linkType?: ('internal' | 'external')[];
  linkText?: string;
  linkUrl?: string;
};

export type Article = {
  category: ArticleCategory;
  title: string;
  description?: string;
  content: string;
  thumbnail?: MicroCMSImage;
  tags?: Tag[];
  peach_fight_details?: PeachFightDetails;
  cta_button?: CtaButton[];
} & MicroCMSContentId &
  MicroCMSDate;
