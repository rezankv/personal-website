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

        <div className="flex items-center gap-3">
          {socialLinks.map((social, index) => (
            <Fragment key={social.link}>
              <Link
                href={social.link}
                target={social.target}
                rel={social.rel}
                className="hover:text-foreground transition-colors duration-200"
              >
                <span>{social.platform}</span>
              </Link>
              {index < socialLinks.length - 1 && <span>•</span>}
            </Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};
