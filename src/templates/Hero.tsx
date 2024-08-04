import Link from 'next/link';

import { Background } from '../background/Background';
//mport { Button } from '../button/Button';
//import { HeroOneButton } from '../hero/HeroOneButton';
import { HeroNoButton } from '../hero/HeroNoButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/nickySmack">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Honey Calculators</Link>
        </li>
        <li>
          <Link href="/">Maple Calculators</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-20">
      <HeroNoButton
        title={
          <>
            {'The latest development landing page for\n'}
            <span className="text-primary-500">Gifford Hill Gold.</span>
          </>
        }
        description="Leading the way in pure and natural sweeteners."
        // button={
        //   <Link href="https://creativedesignsguru.com/category/nextjs/">
        //     <Button xl>Download Your Free Theme</Button>
        //   </Link>
        // }
      />
    </Section>
  </Background>
);

export { Hero };
