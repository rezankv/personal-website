import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";
const nextConfig: NextConfig = {};
const withNextIntl = createNextIntlPlugin();


export default withContentlayer(withNextIntl(nextConfig))
