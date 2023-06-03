import Image from 'next/image';

export default function LogoIcon({ className }: { className?: string }) {
  return (
      <Image
          src="/logo.png"
          alt="logo"
          className={className}
      />
  );
}
