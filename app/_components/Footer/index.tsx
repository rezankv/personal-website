import Link from "next/link";
import { Fragment } from "react";

// constants
import { socialLinks } from "@app/constants";

export const Footer = () => {
  return (
    <footer className="border-border mx-4 border-t pt-8">
      <div className="text-muted-foreground flex flex-col items-center gap-4 text-sm sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} Reza Nikravesh</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link, index) => (
            <Fragment key={link.platform}>
              <Link
                href={link.href}
                target={link.target}
                rel={link.rel}
                className="hover:text-foreground transition-colors duration-200"
              >
                <span>{link.platform}</span>
              </Link>
              {index < socialLinks.length - 1 && <span>•</span>}
            </Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};
