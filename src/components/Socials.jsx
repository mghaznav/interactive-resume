import { SOCIALS } from "../data";

export default function Socials({styles}) {
  return (
    <>
      {SOCIALS.map(social => {
        return (
          <a
            key={social.id}
            href={social.link}
            className={styles}
          >
            <social.icon />
          </a>
        );
      })}
    </>
  );
}