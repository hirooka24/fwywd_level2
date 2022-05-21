import NextImage, { StaticImageData } from 'next/image';

export interface LogoProps {
  src: StaticImageData;
  //本当はStaticImageDataだがエラーが出る
  alt?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ src, alt = '', width, height }) => (
  <NextImage src={src} alt={alt} width={width} height={height} />
);
