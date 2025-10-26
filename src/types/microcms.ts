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

export type Article = {
  category: ArticleCategory;
  title: string;
  description?: string;
  content: string;
  thumbnail?: MicroCMSImage;
  tags?: Tag[];
  peach_fight_details?: PeachFightDetails;
} & MicroCMSContentId &
  MicroCMSDate;

export type ServiceWorry = {
  fieldId: string;
  worry_text?: string;
};

export type ServiceStrength = {
  fieldId: string;
  strength_title: string;
  strength_text: string;
  strength_image: MicroCMSImage;
};

export type ServicePlan = {
  fieldId: string;
  eye_catch?: string;
  plan_name: string;
  plan_type: '月額' | '単発';
  price: number;
  is_starting_price: boolean;
  plan_description: string;
};

export type ServiceOption = {
  fieldId: string;
  option_name: string;
  option_type: '月額' | '単発';
  option_price: number;
  is_starting_price: boolean;
  option_description?: string;
};

export type ServiceStep = {
  fieldId: string;
  step_title?: string;
  step_description?: string;
  step_image?: MicroCMSImage;
};

export type Service = {
  title_en: string;
  title_jp: string;
  catchphrase?: string;
  main_visual: MicroCMSImage;
  title_image?: MicroCMSImage;
  worries: ServiceWorry[];
  meta_description: string;
  description: string;
  strengths: ServiceStrength[];
  plan: ServicePlan[];
  option?: ServiceOption[];
  steps: ServiceStep[];
  related_faq_tag?: Tag;
} & MicroCMSContentId &
  MicroCMSDate;
