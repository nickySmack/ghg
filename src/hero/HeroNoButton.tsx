import type { ReactNode } from 'react';

type IHeroNoButtonProps = {
  title: ReactNode;
  description: string;
  //button: ReactNode;
};

const HeroNoButton = (props: IHeroNoButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl">{props.description}</div>
  </header>
);

export { HeroNoButton };
