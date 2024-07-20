import Image from "next/image";

type IHeroSocialProps = {
    src: string;
    alt: string;
};

const HeroSocial = (props: IHeroSocialProps) => (
    <Image
        className="hover:translate-y-1"
        src={props.src}
        alt={props.alt}
        width={44}
        height={44}
        loading="lazy"
    />
);

export { HeroSocial };