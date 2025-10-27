import { FC } from 'react';
import { MENU, CONTACT, IMAGEBASEURL } from '@/constants';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLine } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export const Footer: FC = () => {
  return (
    <footer className="hidden flex-col items-center px-4 pb-12 pt-12 md:flex">
      <div className="flex w-full justify-center">
        <Link href="/">
          <Image
            src={`${IMAGEBASEURL}/common/square_logo.svg`}
            width={100}
            height={100}
            alt={'ピーチウェブ'}
            loading={'lazy'}
          />
        </Link>
      </div>
      <div className="my-12 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.774229050928!2d133.99540741233992!3d34.66040427282121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554093457eafe59%3A0x9de44f38a281f416!2z44CSNzA0LTgxNzYg5bKh5bGx55yM5bKh5bGx5biC5p2x5Yy65Lit5bed55S677yU77yQ77yV4oiS77yRIOODtOOCo-ODs-ODhuODvOOCuOODu-ODl-ODrOOCpOOCuQ!5e0!3m2!1sja!2sjp!4v1725538334551!5m2!1sja!2sjp"
          className="h-80 w-full border-0"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex w-full max-w-6xl justify-center gap-8">
        <nav>
          <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 text-xs">
            {MENU.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="group relative block px-4 py-3 text-center transition-colors duration-300 hover:text-momo-100"
                >
                  <span>{item.title}</span>
                  <span className="absolute bottom-0 left-0 block h-0.5 w-full origin-left scale-x-0 bg-momo-100 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col w-1/4">
          <Button asChild variant="default" className="btn-slide-hover">
            <Link href="/contact">
              <Mail className="!h-5 !w-5" />
              お問い合わせ
            </Link>
          </Button>
          <address className="my-5 not-italic text-xs mx-auto">
            〒704-8176
            <br />
            岡山県岡山市東区中川町405-1
            <br />
            ヴィンテージ・プレイス201
          </address>
          <div className="flex gap-5 justify-center-safe">
            <Link href={CONTACT.instagram} target="_blank">
              <FaInstagram size={'3em'} />
            </Link>
            <Link href={CONTACT.X} target="_blank">
              <FaSquareXTwitter size={'3em'} />
            </Link>
            <Link href={CONTACT.line} target="_blank">
              <FaLine size={'3em'} />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full text-center">
        <p className="text-sm">© 2024 PEACH WEB LLC</p>
      </div>
    </footer>
  );
};
