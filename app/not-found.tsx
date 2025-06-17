import Link from "next/link";
// constants
import { routes } from "@app/constants";

const NotfoundPage = () => {
  return (
    <div className="bg-background fixed inset-0 z-10 flex flex-col items-center justify-center gap-2 px-2 py-4 text-center">
      <span className="text-2xl font-bold md:text-4xl">
        Oops! Page not found
      </span>
      <p className="text-muted-foreground">
        The page you’re looking for doesn’t exist or has been moved
      </p>
      <Link href={routes.HOME_ROUTE} className="mt-8 underline">
        Back to Home
      </Link>
    </div>
  );
};

export default NotfoundPage;
