// 各サービス共通のデータ型

// 画像
export type ServiceImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

// 情報カード
export type InfoCardItem = {
  id: string;
  title: string;
  description: string;
  image: ServiceImage;
};

// こんなお悩みございませんか？
export type ServiceWorry = {
  id: string;
  text: string;
};

// 料金プラン
export type ServicePlan = {
  id: string;
  eyeCatch?: string;
  planName: string;
  planType: '月額' | '単発';
  price: number;
  isStartingPrice: boolean;
  planLead: string;
  planList: string[];
};

// 有料オプション
export type ServiceOption = {
  id: string;
  optionName: string;
  optionType: '月額' | '単発';
  optionPrice: number;
  isStartingPrice: boolean;
  optionDescription?: string;
};

// サービスの型定義
export type ServiceData = {
  id: string;
  titleEn: string;
  titleJp: string;
  catchphrase: string;
  mainVisual: ServiceImage;
  titleImage?: ServiceImage;
  metaDescription: string;
  descriptionHtml: string;
  relatedFaqTagId?: string;
};

// 【共通】ダイアログ
export type Dialogue = {
  id: string;
  speaker: 'client' | 'staff';
  text: string;
  image: ServiceImage;
};

// 【共通】ビジネスの問題点をチェック
export type BusinessIssue = InfoCardItem & {
  keyword: string;
};

// 【はぐぺ用】集客成功の方程式
export type HagupeEquation = {
  leadInitiatives: string[];
  cvInitiatives: string[];
};
