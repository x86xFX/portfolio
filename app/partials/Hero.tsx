import { GradientText } from "@/app/components/GradientText";
import { Section } from "@/app/components/Section";
import { HeroAvatar } from "@/app/components/HeroAvatar";
import { HeroSocial } from "@/app/components/HeroSocial";
import Image from "next/image";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I&apos;m <GradientText>Theekshana</GradientText> 👋
        </>
      }
      description={
        <>
          I&apos;m an{' '}<a className="text-cyan-400 hover:underline" href="https://developer.android.com">Android</a>{' '}
          developer who loves building cool apps. I use
          {' '}<a className="text-cyan-400 hover:underline" href="https://kotlinlang.org">Kotlin</a>{' '}
          and{' '}<a className="text-cyan-400 hover:underline" href="https://developer.android.com/develop/ui/compose">Jetpack Compose</a>{' '}to make things happen.
          Plus, I&apos;ve dived into the backend world with
          {' '}<a className="text-cyan-400 hover:underline" href="https://ktor.io">Ktor</a>{' '}for APIs. In my free time,
          I usually mess around with web stuff using{' '}<a className="text-cyan-400 hover:underline" href="https://nextjs.org">NextJs</a>,{' '}<a className="text-cyan-400 hover:underline" href="https://www.typescriptlang.org">Typescript</a>{' '}, and{' '}<a className="text-cyan-400 hover:underline" href="https://tailwindcss.com">Tailwind</a>{' '}. I&apos;m also into cybersecurity and all that good stuff.
        </>
      }
      avatar={
        <Image
          width={250}
          height={100}
          src="./assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/x86xFX">
            <HeroSocial
                src="./assets/images/github-icon.png"
                alt="Github icon"
            />
          </a>
          <a href="https://www.reddit.com/user/0xFF__">
            <HeroSocial
                src="./assets/images/reddit-icon.png"
                alt="Reddit icon"
            />
          </a>
          <a href="https://play.google.com/store/apps/developer?id=Theekshana+Nirmana">
            <HeroSocial
                src="./assets/images/play-icon.png"
                alt="Google Playstore icon"
            />
          </a>
          <a href="mailto:theek1010@gmail.com">
            <HeroSocial
                src="./assets/images/gmail-icon.png"
                alt="Gmail icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export {Hero};
