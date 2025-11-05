import { Metadata } from 'next';
import type {
  Article as ArticleSchema,
  BreadcrumbList,
  FAQPage,
  Question,
  Service as ServiceSchema,
  WithContext,
} from 'schema-dts';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import { IMAGEBASEURL } from '@/constants';
import type { Article as ArticleType } from '@/types/microcms';
import { getFaqsByTag } from '@/lib/microcms';
import {
  hagupeData,
  hagupeWorries,
  homepageMerits,
  hagupeStrengths,
  hagupePlans,
  hagupeOptions,
  hagupeSteps,
  hagupeIssuesDialogue,
  checkIssuesleadConversion,
  hagupeEquation,
  hagupeProposalDialogue,
  hagupeSnsDialogue,
  disadvantagesOfSns,
  webMarketingSteps,
} from '@/config/services/hagupeData';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MainVisualSection } from '@/components/features/services/MainVisualSection';
import { WorriesSection } from '@/components/features/services/WorriesSection';
import { DialogueSection } from '@/components/features/services/DialogueSection';
import { ThreeCardsSlider } from '@/components/features/services/ThreeCardsSlider';
import { ReadMoreSection } from '@/components/features/services/ReadMoreSection';
import { MeritsSlider } from '@/components/features/services/MeritsSlider';
import { ServiceIntroductionSection } from '@/components/features/services/ServiceIntroductionSection';
import { ContactSection } from '@/components/features/services/ContactSection';
import { StrengthsSection } from '@/components/features/services/StrengthsSection';
import { BusinessIssueCard } from '@/components/features/services/BusinessIssueCard';
import { PlanCard } from '@/components/features/services/PlanCard';
import { OptionsSection } from '@/components/features/services/OptionsSection';
import { DisadvantagesSlider } from '@/components/features/services/DisadvantagesSlider';
import { RichStepsSection } from '@/components/features/services/RichStepsSection';
import { StepsSlider } from '@/components/features/services/StepsSlider';
import { FaqsSection } from '@/components/features/services/FaqsSection';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { X, Check, Sparkles, ArrowRightLeft, ArrowUpDown, KeyRound, ThumbsUp } from 'lucide-react';

export const revalidate = 0;
const parentSegment = 'services';

const breadcrumbsData = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: 'サービス一覧',
    href: `/${parentSegment}`,
    isCurrentPage: false,
  },
  {
    title: hagupeData.titleJp,
    href: `/${parentSegment}/${hagupeData.titleEn}`,
    isCurrentPage: true,
  },
];

export const generateMetadata = (): Metadata => {
  const url = `/${parentSegment}/${hagupeData.id}`;
  return {
    title: hagupeData.titleJp,
    description: hagupeData.metaDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: hagupeData.titleJp,
      description: hagupeData.metaDescription,
      url: url,
      images: [
        {
          url: hagupeData.mainVisual.url,
          alt: hagupeData.titleJp,
        },
      ],
      type: 'article',
    },
    twitter: {
      title: hagupeData.titleJp,
      description: hagupeData.metaDescription,
      images: [
        {
          url: hagupeData.mainVisual.url,
          alt: hagupeData.titleJp,
        },
      ],
    },
  };
};

const HagupePage = async () => {
  let faqs: ArticleType[] = [];
  const faqTagId = hagupeData.relatedFaqTagId;

  if (faqTagId) {
    const faqListData = await getFaqsByTag(faqTagId);
    faqs = faqListData.contents;
  }

  const breadcrumbJsonLd: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbsData.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.title,
      item: `${siteConfig.url}${breadcrumb.href}`,
    })),
  };

  const serviceJsonLd: WithContext<ServiceSchema> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: hagupeData.titleJp,
    description: hagupeData.metaDescription,
    image: hagupeData.mainVisual.url,
    url: `${siteConfig.url}/${parentSegment}/${hagupeData.id}`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logo,
      },
    },
    offers: hagupePlans.map((p) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: p.planName,
      },
      price: p.price,
      priceCurrency: 'JPY',
      description: p.planLead.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, ''),
    })),
    serviceType: hagupeData.titleJp,
  };

  const faqJsonLd: WithContext<FAQPage> | null =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(
            (faq) =>
              ({
                '@type': 'Question',
                name: faq.title,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, ''),
                },
              } as Question),
          ),
        }
      : null;

  return (
    <>
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <JsonLd jsonLdData={serviceJsonLd} />
      {faqJsonLd && <JsonLd jsonLdData={faqJsonLd} />}
      <MainVisualSection data={hagupeData} />
      {hagupeWorries && hagupeWorries.length > 0 && <WorriesSection worries={hagupeWorries} />}
      {hagupeIssuesDialogue && hagupeIssuesDialogue.length > 0 && (
        <DialogueSection
          dialogues={hagupeIssuesDialogue}
          title={
            <>
              その悩み<span className="hidden md:inline-block">、</span>
              <br className="md:hidden" />
              ホームページで解決できる？
            </>
          }
        />
      )}
      {checkIssuesleadConversion && checkIssuesleadConversion.length > 0 && (
        <ThreeCardsSlider
          title={
            <>
              あなたの本当の悩みはどれ？
              <br />
              スモールビジネスの問題チェック
            </>
          }
        >
          {checkIssuesleadConversion.map((issue) => (
            <BusinessIssueCard key={issue.id} issue={issue} />
          ))}
        </ThreeCardsSlider>
      )}
      <ReadMoreSection
        icon={KeyRound}
        title={
          <>
            問題解決の鍵は<span className="md:hidden">...</span>
            <br className="md:hidden" />
            <span className="text-momo-100">集客の方程式</span>にあり！
          </>
        }
        readMoreText="詳しくは..."
      />
      <section
        className="relative py-16 md:py-24 overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${IMAGEBASEURL}/services/parallax-bg.webp)` }}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <SectionTitle>
            リードとコンバージョンが
            <br className="md:hidden" />
            集客成功の方程式！
          </SectionTitle>
          <div className="pt-12 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 text-center">
            <div className="p-6 bg-momo-100 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <Badge
                variant="outline"
                className="text-white border-white/50 text-xs md:text-sm px-3 py-1 mb-3"
              >
                多くの人にあなたを知ってもらう
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-white">リード獲得</h3>
            </div>
            <X className="w-8 h-8 md:w-12 md:h-12 mx-auto" />
            <div className="p-6 bg-momo-300 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <Badge variant="outline" className="text-xs md:text-sm px-3 py-1 mb-3">
                高い確率でお客様に選んでもらう
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold">コンバージョン率</h3>
            </div>
          </div>
          <div className="mt-16 flex flex-col md:flex-row items-stretch md:items-center gap-8">
            <div className="w-full md:flex-1 bg-gray-600 p-6 rounded-lg border-2 border-momo-100">
              <h4 className="text-xl font-bold text-momo-100 mb-4">リード獲得の取り組み</h4>
              <ul className="space-y-3">
                {hagupeEquation.leadInitiatives.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-200">
                    <Check className="w-5 h-5 text-momo-100 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <ArrowUpDown className="w-8 h-8 mx-auto md:hidden" />
              <ArrowRightLeft className="w-10 h-10 mx-auto hidden md:block" />
            </div>
            <div className="w-full md:flex-1 bg-gray-600 p-6 rounded-lg border-2 border-momo-300">
              <h4 className="text-xl font-bold text-momo-300 mb-4">
                コンバージョン率向上の取り組み
              </h4>
              <ul className="space-y-3">
                {hagupeEquation.cvInitiatives.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-200">
                    <Check className="w-5 h-5 text-momo-300 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {hagupeProposalDialogue && hagupeProposalDialogue.length > 0 && (
        <DialogueSection
          dialogues={hagupeProposalDialogue}
          title={
            <>
              集客の第一歩は
              <br className="md:hidden" />
              ホームページ制作から？
            </>
          }
        />
      )}
      {homepageMerits && homepageMerits.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle>
              ホームページ制作の
              <br className="md:hidden" />
              4つのメリット
            </SectionTitle>
            <MeritsSlider meritsData={homepageMerits} />
          </div>
        </section>
      )}
      <ReadMoreSection
        icon={ThumbsUp}
        title={
          <>
            ホームページ制作なら<span className="md:hidden">...</span>
            <br className="md:hidden" />
            <span className="text-momo-100">ピーチウェブ</span>におまかせ！
          </>
        }
        readMoreText="詳しくは..."
      />
      {hagupeData && <ServiceIntroductionSection data={hagupeData} />}
      <ContactSection title="まずは気軽にWeb集客のお悩みをご相談ください！" />
      {hagupeStrengths && hagupeStrengths.length > 0 && (
        <StrengthsSection titleJp={hagupeData.titleJp} strengths={hagupeStrengths} />
      )}
      {hagupePlans && hagupePlans.length > 0 ? (
        <ThreeCardsSlider title="料金プラン">
          {hagupePlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </ThreeCardsSlider>
      ) : (
        <section className="py-16 md:py-24">
          <p className="text-center">料金プランは準備中です。</p>
        </section>
      )}
      {hagupeOptions && hagupeOptions.length > 0 && (
        <OptionsSection title="有料オプション" options={hagupeOptions} />
      )}
      <ContactSection title="ご要望に応じたカスタマイズ見積もりも可能です！" />
      {hagupeSnsDialogue && hagupeSnsDialogue.length > 0 && (
        <DialogueSection
          dialogues={hagupeSnsDialogue}
          title={
            <>
              ホームページ制作が先？
              <br className="md:hidden" />
              SNSからじゃだめ？
            </>
          }
        />
      )}
      {disadvantagesOfSns && disadvantagesOfSns.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle>
              SNSから集客を始める
              <br className="md:hidden" />
              5つのデメリット
            </SectionTitle>
            <DisadvantagesSlider cards={disadvantagesOfSns} />
          </div>
        </section>
      )}
      {webMarketingSteps && webMarketingSteps.length > 0 && (
        <RichStepsSection steps={webMarketingSteps} title="おすすめのWeb集客の進め方" />
      )}
      <ReadMoreSection
        icon={Sparkles}
        title={
          <>
            ピーチウェブと一緒に
            <br className="md:hidden" />
            <span className="text-momo-100">Web集客</span>を考えませんか？
          </>
        }
        readMoreText="ご依頼ステップは..."
      />
      {hagupeSteps && hagupeSteps.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle>ご依頼の流れ</SectionTitle>
            <StepsSlider steps={hagupeSteps} />
          </div>
        </section>
      )}
      <ContactSection title="気軽にお問い合わせください！" />
      {faqs && faqs.length > 0 && <FaqsSection title="よくあるご質問" faqs={faqs} />}
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
    </>
  );
};

export default HagupePage;
