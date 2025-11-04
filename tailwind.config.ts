import type { Config } from 'tailwindcss';

const config = {
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            lineHeight: '2.25rem',
            p: {
              fontSize: '1rem',
              lineHeight: '2rem',
              marginTop: '30px',
              marginBottom: '30px',
            },
            h2: {
              display: 'inline-block',
              backgroundColor: 'var(--color-momo-600)',
              paddingLeft: '1em',
              paddingRight: '2em',
              paddingTop: '0.5em',
              paddingBottom: '0.5em',
              borderRadius: '0px 9999px 9999px 0px',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              textDecoration: 'none',
              marginTop: '2em',
              marginBottom: '1.5em',
            },
            h3: {
              display: 'inline-block',
              position: 'relative',
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              paddingLeft: '1.5em',
              textDecoration: 'none',
              marginTop: '1.5em',
              marginBottom: '1em',
              fontWeight: '600',
              '&::before': {
                content: '"🍑"',
                position: 'absolute',
                left: '0px',
                top: '0px',
                fontSize: '1em',
              },
            },
            img: {
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '400px',
            },
            blockquote: {
              fontStyle: 'normal',
            },
            ul: {
              paddingInlineStart: '20px',
            },
            ol: {
              paddingInlineStart: '20px',
            },
            'ul > li': {
              paddingInlineStart: '0px',
            },
            'ol > li': {
              paddingInlineStart: '0px',
            },
            '.marker': {
              background: 'linear-gradient(transparent 0%, #fcdee9 0%)',
              borderRadius: '6px',
            },
            '.callout-memo, .callout-caution, .lead': {
              display: 'block',
              padding: '16px',
              borderRadius: '8px',
            },
            '.callout-memo': {
              backgroundColor: '#e8f3d6',
            },
            '.callout-caution': {
              backgroundColor: '#f3d6d6',
            },
            '.callout-caution::before': {
              display: 'block',
              content: "url('https://www.assets.peach-web.co.jp/caution.svg')",
              width: '30px',
              height: '30px',
              marginBottom: '10px',
            },
            '.lead': {
              backgroundColor: '#f3f2ed',
              fontSize: 'medium',
              lineHeight: '2rem',
            },
          },
        },
      }),
    },
  },
} satisfies Config;

export default config;
