// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import logoSquare from '@/app/public/logo-square.png';
import { robotoFlex } from '@/app/ui/fonts';

export default function Logo() {
  return (
    <div className={`${robotoFlex.className} flex flex-row items-center leading-none text-white`}>
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <Image src={logoSquare} width={150} height={150} className="block" alt="O'Keefe ECG v2 logo" />
      {/* <p className="text-[44px]">Acme</p> */}
    </div>
  );
}
