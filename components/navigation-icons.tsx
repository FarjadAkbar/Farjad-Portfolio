import { HiOutlineHome, HiOutlineBriefcase, HiOutlineBookOpen, HiOutlineMail } from "react-icons/hi";

const icons = {
  "/": HiOutlineHome,
  "/portfolio": HiOutlineBriefcase,
  "/blogs": HiOutlineBookOpen,
  "/contact": HiOutlineMail,
};

export default function NavigationIcon({ href }: { href: keyof typeof icons }) {
  const Icon = icons[href];
  return <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />;
}
