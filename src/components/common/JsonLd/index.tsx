import { FC } from 'react';
import type { Thing, WithContext } from 'schema-dts';

type Props = {
  jsonLdData: WithContext<Thing>;
};

export const JsonLd: FC<Props> = ({ jsonLdData }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};
