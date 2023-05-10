import classNames from "classnames";

import Image from "@components/shared/Image/Image";
import Box from "@components/shared/Box/Box";
import Typography from "@components/shared/Typography/Typography";
import Link from "@components/shared/Link/Link";

import { useWindowScrollPosition } from "../../hooks/useWindowScrollPosition";

import { ROUTES } from "src/routes/routes.constants";

function Header() {
  const { scrollY } = useWindowScrollPosition();

  const headerLinkStyles =
    " rounded bg-white bg-opacity-0 px-4 py-1 transition-colors hover:bg-opacity-10 hover:text-white";

  const getHeaderColor = () => {
    if (scrollY >= 5000) {
      return "";
    } else if (scrollY >= 1200) {
      return "shadow-battlepro transition duration-500 ease";
    } else if (scrollY >= 400) {
      return "shadow-sociogram transition duration-500 ease";
    } else {
      return "shadow-none transition duration-500 ease";
    }
  };

  return (
    <header
      className={classNames({
        "sticky top-0 flex h-16 w-full items-center justify-between px-6 backdrop-blur-sm z-50": true,
        "border-opacity-1 border-b border-solid  border-b-gray-8 transition duration-300 ease bg-blurry-1": false,
        "border-b border-solid border-b-gray-8 border-opacity-0 transition duration-300 ease": true,
      })}
    >
      <Box
        className={classNames(
          {
            "absolute w-full": true,
          },
          getHeaderColor()
        )}
      />
      <Link href={ROUTES.HOME}>
        <Image src="icons/logo.svg" alt="logo" width={55} height={29} />
      </Link>
      <nav className="flex h-3 items-center gap-3">
        <Link href={ROUTES.WORK} className={headerLinkStyles}>
          work
        </Link>
        <Link href={ROUTES.SKILLS} className={headerLinkStyles}>
          skills
        </Link>
        <Link href={ROUTES.RESUME} className={headerLinkStyles}>
          resume
        </Link>
      </nav>
    </header>
  );
}

export default Header;
