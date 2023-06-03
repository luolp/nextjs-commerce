import Image from 'next/image';
import logoPic from '/logo.png';

export default function LogoIcon({ className }: { className?: string }) {
  return (
      <Image
          src={logoPic}
          className={className}
      />
  );
}
