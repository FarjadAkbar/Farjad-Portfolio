import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function SocialLinks({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {[
        { name: "LinkedIn", href: "https://linkedin.com/in/farjad-akbar", Icon: FaLinkedinIn },
        { name: "GitHub", href: "https://github.com/FarjadAkbar", Icon: FaGithub },
      ].map(({ name, href, Icon }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} profile (opens in a new tab)`} title={name}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 ${dark ? "border-gray-800 bg-white/5 text-gray-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400" : "border-gray-200 bg-gray-50 text-gray-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"}`}>
          <Icon aria-hidden="true" className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
