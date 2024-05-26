import { IconMail, IconPhoneSolid } from '@/components/Svg/svgicons';

export default function TopHelplineSection() {
  return (
    <div className="bg-muted px-8 flex  gap-4 justify-end items-center">
      <div className="flex items-center gap-1">
        <IconPhoneSolid className="mx-1 size-4" /> helpline number:{' '}
        <a href="tel:+977-9704503606" className="font-bold">
          9704503606
        </a>
      </div>
      <div className="items-center hidden sm:flex gap-1">
        <IconMail solid className="mx-1 size-4" />
        <a href="mail:nakoshiasc@gmail.com" className="font-bold">
          nakoshiasc@gmail.com{' '}
        </a>
      </div>
    </div>
  );
}
