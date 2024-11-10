import NextImage from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { FC } from "react";

const Image: FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}> = ({ src, alt, width, height, className }) => {
  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <div className="-mb-3">
        <NextImage
          src={src}
          alt={alt}
          width={width ?? "1600"}
          height={height ?? "900"}
          placeholder="blur"
          blurDataURL={src}
        />
      </div>
    </div>
  );
};

const components = {
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
