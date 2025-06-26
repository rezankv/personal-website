// generate-og-images.js

const fs = require("fs");
const path = require("path");
const { ImageResponse } = require("@vercel/og"); // You'll need to install this
const { Resvg } = require("@resvg/resvg-js"); // For converting SVG to PNG

// --- Configuration ---
const CONTENT_DIRS = {
  posts: "src/content/blog", // Adjust these paths to your actual MDX locations
  projects: "src/content/projects",
  pages: "src/pages", // For general pages (e.g., about, contact)
};

const PUBLIC_DIR = "public";
const OG_IMAGES_DIR = path.join(PUBLIC_DIR, "og"); // Where OG images will be saved

const DEFAULT_OG_IMAGE_WIDTH = 1200;
const DEFAULT_OG_IMAGE_HEIGHT = 630;

// --- Helper Functions ---

/**
 * Generates an SVG string from a React component using @vercel/og.
 * @param {JSX.Element} component The React component to render.
 * @returns {Promise<string>} A promise that resolves to the SVG string.
 */
async function generateOgSvg(
  component,
  width = DEFAULT_OG_IMAGE_WIDTH,
  height = DEFAULT_OG_IMAGE_HEIGHT,
) {
  const svg = await new ImageResponse(component, {
    width,
    height,
    // Add other options as needed, e.g., fonts
    // fonts: [
    //   {
    //     name: 'Inter',
    //     data: fs.readFileSync(path.resolve('./public/fonts/Inter-Regular.ttf')),
    //     weight: 400,
    //     style: 'normal',
    //   },
    // ],
  }).text();
  return svg;
}

/**
 * Converts an SVG string to a PNG buffer.
 * @param {string} svgString The SVG content as a string.
 * @returns {Buffer} The PNG image buffer.
 */
function convertSvgToPng(svgString) {
  const resvg = new Resvg(svgString, {
    fitTo: {
      mode: "width",
      value: DEFAULT_OG_IMAGE_WIDTH,
    },
  });
  const pngData = resvg.render();
  return pngData.asPng();
}

/**
 * Creates an OG image path based on content type and slug.
 * @param {'posts'|'projects'|'pages'} type
 * @param {string} slug
 * @returns {string} The full path to the expected OG image file.
 */
function getOgImagePath(type, slug) {
  const filename = `${slug}.png`;
  return path.join(OG_IMAGES_DIR, type, filename);
}

// --- OG Image Templates (React Components) ---

// You'll need to create these components, or integrate them directly here.
// For simplicity, let's define them inline. In a real project, you might
// put these in a separate file (e.g., `src/og-templates.jsx`).

// Base styles for all OG images
const baseStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "#1a202c", // Dark background
  color: "#cbd5e0", // Light text
  fontFamily: "sans-serif",
  padding: "40px",
  boxSizing: "border-box",
};

// Generic Page OG Image Template
const PageOgTemplate = ({ title, description }) => (
  <div style={baseStyles}>
    <h1 style={{ fontSize: "64px", textAlign: "center", marginBottom: "20px" }}>
      {title}
    </h1>
    {description && (
      <p style={{ fontSize: "32px", textAlign: "center", opacity: 0.8 }}>
        {description}
      </p>
    )}
    <p
      style={{
        fontSize: "24px",
        position: "absolute",
        bottom: "30px",
        right: "40px",
        opacity: 0.6,
      }}
    >
      yourwebsite.com
    </p>
  </div>
);

// Blog Post OG Image Template
const BlogPostOgTemplate = ({ title, date, author }) => (
  <div style={{ ...baseStyles, backgroundColor: "#2d3748" }}>
    {" "}
    {/* Slightly different background */}
    <p style={{ fontSize: "28px", marginBottom: "10px", opacity: 0.7 }}>
      Blog Post
    </p>
    <h1
      style={{
        fontSize: "60px",
        textAlign: "center",
        lineHeight: "1.2",
        marginBottom: "25px",
      }}
    >
      {title}
    </h1>
    <div style={{ display: "flex", fontSize: "24px", opacity: 0.8 }}>
      <span>By {author || "Your Name"}</span>
      {date && <span style={{ marginLeft: "20px" }}>| {date}</span>}
    </div>
    <p
      style={{
        fontSize: "24px",
        position: "absolute",
        bottom: "30px",
        right: "40px",
        opacity: 0.6,
      }}
    >
      yourwebsite.com/blog
    </p>
  </div>
);

// Project OG Image Template
const ProjectOgTemplate = ({ title, technologies, description }) => (
  <div style={{ ...baseStyles, backgroundColor: "#3182ce" }}>
    {" "}
    {/* Blue background */}
    <p style={{ fontSize: "28px", marginBottom: "10px", opacity: 0.7 }}>
      My Project
    </p>
    <h1
      style={{
        fontSize: "60px",
        textAlign: "center",
        lineHeight: "1.2",
        marginBottom: "25px",
      }}
    >
      {title}
    </h1>
    {technologies && (
      <p
        style={{ fontSize: "28px", textAlign: "center", marginBottom: "20px" }}
      >
        Tech: {technologies.join(", ")}
      </p>
    )}
    {description && (
      <p style={{ fontSize: "28px", textAlign: "center", opacity: 0.8 }}>
        {description}
      </p>
    )}
    <p
      style={{
        fontSize: "24px",
        position: "absolute",
        bottom: "30px",
        right: "40px",
        opacity: 0.6,
      }}
    >
      yourwebsite.com/projects
    </p>
  </div>
);

// --- Main Generation Logic ---

async function generateOgImages() {
  console.log("Starting OG image generation...");

  // Ensure the OG images directory exists
  fs.mkdirSync(OG_IMAGES_DIR, { recursive: true });
  fs.mkdirSync(path.join(OG_IMAGES_DIR, "posts"), { recursive: true });
  fs.mkdirSync(path.join(OG_IMAGES_DIR, "projects"), { recursive: true });
  fs.mkdirSync(path.join(OG_IMAGES_DIR, "pages"), { recursive: true });

  // 1. Process Blog Posts
  console.log("Processing blog posts...");
  const postFiles = fs
    .readdirSync(CONTENT_DIRS.posts)
    .filter((file) => file.endsWith(".mdx"));
  for (const file of postFiles) {
    const slug = path.basename(file, ".mdx");
    const ogImagePath = getOgImagePath("posts", slug);

    if (fs.existsSync(ogImagePath)) {
      console.log(`  - OG image for post "${slug}" already exists. Skipping.`);
      continue;
    }

    // You would typically parse the MDX file here to extract metadata (frontmatter)
    // For this example, let's mock it. In a real app, use 'gray-matter' or similar.
    const mockPostMeta = {
      title: `Blog Post: ${slug.replace(/-/g, " ")}`,
      date: "June 23, 2025",
      author: "Your Name",
    };

    console.log(`  - Generating OG image for post: ${slug}`);
    const svgString = await generateOgSvg(
      <BlogPostOgTemplate
        title={mockPostMeta.title}
        date={mockPostMeta.date}
        author={mockPostMeta.author}
      />,
    );
    const pngBuffer = convertSvgToPng(svgString);
    fs.writeFileSync(ogImagePath, pngBuffer);
    console.log(`    Generated: ${ogImagePath}`);
  }

  // 2. Process Projects
  console.log("Processing projects...");
  const projectFiles = fs
    .readdirSync(CONTENT_DIRS.projects)
    .filter((file) => file.endsWith(".mdx"));
  for (const file of projectFiles) {
    const slug = path.basename(file, ".mdx");
    const ogImagePath = getOgImagePath("projects", slug);

    if (fs.existsSync(ogImagePath)) {
      console.log(
        `  - OG image for project "${slug}" already exists. Skipping.`,
      );
      continue;
    }

    const mockProjectMeta = {
      title: `Project: ${slug.replace(/-/g, " ")}`,
      technologies: ["Next.js", "TailwindCSS"],
      description: `A cool project about ${slug.replace(/-/g, " ")}.`,
    };

    console.log(`  - Generating OG image for project: ${slug}`);
    const svgString = await generateOgSvg(
      <ProjectOgTemplate
        title={mockProjectMeta.title}
        technologies={mockProjectMeta.technologies}
        description={mockProjectMeta.description}
      />,
    );
    const pngBuffer = convertSvgToPng(svgString);
    fs.writeFileSync(ogImagePath, pngBuffer);
    console.log(`    Generated: ${ogImagePath}`);
  }

  // 3. Process General Pages (e.g., about, contact)
  // This assumes your pages are directly in `src/pages` and you want OG images for them.
  // You might need to adjust this to read your `next.config.js` or directly
  // define the pages you want OG images for.
  console.log("Processing general pages...");
  const generalPages = [
    {
      slug: "about",
      title: "About Me",
      description: "Learn more about my journey.",
    },
    { slug: "contact", title: "Contact Me", description: "Get in touch!" },
    {
      slug: "index",
      title: "My Portfolio",
      description: "Showcasing my work and thoughts.",
    }, // For your homepage
  ];

  for (const page of generalPages) {
    const ogImagePath = getOgImagePath("pages", page.slug); // Assuming 'pages' as a type for general pages

    if (fs.existsSync(ogImagePath)) {
      console.log(
        `  - OG image for page "${page.slug}" already exists. Skipping.`,
      );
      continue;
    }

    console.log(`  - Generating OG image for page: ${page.slug}`);
    const svgString = await generateOgSvg(
      <PageOgTemplate title={page.title} description={page.description} />,
    );
    const pngBuffer = convertSvgToPng(svgString);
    fs.writeFileSync(ogImagePath, pngBuffer);
    console.log(`    Generated: ${ogImagePath}`);
  }

  console.log("OG image generation complete!");
}

generateOgImages().catch((error) => {
  console.error("Error during OG image generation:", error);
  process.exit(1); // Exit with an error code
});
