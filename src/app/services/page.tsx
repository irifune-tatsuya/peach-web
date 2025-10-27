import { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Title } from '@/components/ui/Title';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { BreadcrumbList, ItemList, Service as ServiceSchema, WithContext } from 'schema-dts';
import { ViewMoreButton } from '@/components/features/ViewMoreButton';
import type { ServiceData } from '@/types/service';
import { allServicesData as services } from '@/config/services';

const pageTitle = 'サービス一覧';
const description =
  'ピーチウェブが提供するサービスの一覧です。ホームページ制作、ブログ更新代行、X（旧Twitter）運用代行など、お客様のビジネスを加速させる様々なプランをご紹介します。';

export const metadata: Metadata = {
  title: pageTitle,
  description: description,
  openGraph: {
    title: pageTitle,
    description: description,
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
};

const breadcrumbsData = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: pageTitle,
    href: '/services',
    isCurrentPage: true,
  },
];

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

const serviceListJsonLd: WithContext<ItemList> = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((service, index) => ({
    // 👈 💖
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.titleJp,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.id}`,
      image: service.mainVisual.url,
      provider: {
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
      },
    } as ServiceSchema,
  })),
};

const ServicesPage = () => {
  return (
    <>
      <JsonLd jsonLdData={serviceListJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title titleEn={'Services'} titleJp={'サービス一覧'} />
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-44">
        <div className="mx-auto max-w-6xl px-4">
          {services.length > 0 ? (
            <div className="flex flex-col gap-20">
              {services.map((service: ServiceData, index: number) => (
                <div key={service.id} className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-5">
                  <div className="flex items-start justify-between gap-4 md:col-span-1 lg:col-span-5">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl font-bold text-momo-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold">{service.titleEn}</h3>
                        <h2 className="text-3xl font-bold md:text-4xl">{service.titleJp}</h2>
                      </div>
                    </div>
                    <div className="hidden md:block md:mr-10 lg:mr-0">
                      <ViewMoreButton href={`/services/${service.id}`} size="large" />
                    </div>
                  </div>
                  <div className="flex flex-col md:col-span-1 lg:col-span-3">
                    <div className="md:ml-16 md:mr-28 lg:mx-0">
                      {service.catchphrase && (
                        <p className="mt-4 lg:mt-0 md:text-2xl font-bold text-momo-100">
                          {service.catchphrase}
                        </p>
                      )}
                      <p className="hidden md:block mt-4 xl:mt-6 text-xs md:text-base">
                        {service.metaDescription}
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="rounded-lg overflow-hidden hidden lg:block">
                      <Image
                        src={service.mainVisual.url}
                        alt={service.mainVisual.alt}
                        width={service.mainVisual.width}
                        height={service.mainVisual.height}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                      />
                    </div>
                    <div className="mt-4 rounded-lg overflow-hidden block md:hidden">
                      <Image
                        src={service.mainVisual.url}
                        alt={service.mainVisual.alt}
                        width={service.mainVisual.width}
                        height={service.mainVisual.height}
                        className="w-full h-auto object-cover"
                        sizes="100vw"
                        priority={index < 2}
                      />
                    </div>
                    <div className="mt-10 flex justify-center md:hidden">
                      <ViewMoreButton href={`/services/${service.id}`} size="large" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">現在、提供中のサービスはありません。</p>
          )}
        </div>
      </section>
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
    </>
  );
};

export default ServicesPage;
