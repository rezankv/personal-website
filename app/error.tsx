"use client"; // Error boundaries must be Client Components

import Link from "next/link";

// constants
import { routes } from "@app/constants";

export default function Error() {
  return (
    <div className="bg-background fixed inset-0 z-10 flex flex-col items-center justify-center gap-2 px-2 py-4 text-center">
      <span className="text-2xl font-bold md:text-4xl">
        Something went wrong
      </span>
      <p className="text-muted-foreground">
        We’re experiencing some technical issues. Please try again later
      </p>
      <Link href={routes.HOME_ROUTE} className="mt-8 underline">
        Back to Home
      </Link>
    </div>
  );
}
