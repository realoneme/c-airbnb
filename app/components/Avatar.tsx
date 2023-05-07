"use client";
import Image from "next/image";
import { FC } from "react";
interface IAvatarProps {
  src?: string | null;
}
const Avatar: FC<IAvatarProps> = ({ src }) => {
  return (
    <Image
      alt="Avatar"
      height={30}
      width={30}
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
