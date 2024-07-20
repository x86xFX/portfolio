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
          As a skilled{' '}<a className="text-cyan-400 hover:underline" href="https://developer.android.com">Android</a>{' '}developer,
          I specialize in delivering high-quality software solutions.
          Proficient in{' '}<a className="text-cyan-400 hover:underline" href="https://kotlinlang.org">Kotlin</a>{' '}and{' '}<a className="text-cyan-400 hover:underline" href="https://developer.android.com/develop/ui/compose">Jetpack Compose</a>,
          I create exceptional user experiences.
          My development expertise extends to the backend, where I leverage{' '}<a className="text-cyan-400 hover:underline" href="https://ktor.io">Ktor</a>{' '}for building robust APIs.
          With a passion for full-stack development, I utilize{' '}<a className="text-cyan-400 hover:underline" href="https://nextjs.org">NextJs</a>,{' '}<a className="text-cyan-400 hover:underline" href="https://tailwindcss.com">Tailwind</a>{' '}and{' '}<a className="text-cyan-400 hover:underline" href="https://www.typescriptlang.org">Typescript</a> to craft engaging web applications.
          My technical skill set is further enhanced by experience with{' '}<a className="text-cyan-400 hover:underline" href="https://traefik.io">Reverse Proxies</a>,
          {' '}<a className="text-cyan-400 hover:underline" href="https://www.docker.com">Docker</a>, and{' '}<a className="text-cyan-400 hover:underline" href="https://www.linux.org">Linux</a>{' '}servers.
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
