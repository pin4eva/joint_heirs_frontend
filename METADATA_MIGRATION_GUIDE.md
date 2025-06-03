# Migrating from next/head to Next.js Metadata API

## Overview

This guide explains how to migrate from using `next/head` in the App Router to the new Metadata API. The warning message below appears when using `next/head` inside the `app` directory:

```
Warning: You're using `next/head` inside the `app` directory, please migrate to the Metadata API. See https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead for more details.
```

## What's Been Done So Far

1. Removed `next/head` from `FrontLayout.tsx`
2. Created a utility function in `src/utils/metadata.ts` for generating metadata
3. Updated several pages to use the new Metadata API

## How to Update Remaining Pages

Follow these steps to update the remaining pages:

### 1. Update the Page Component

For each page in the `app` directory that uses `FrontLayout` with a `title` prop:

```tsx
// Before
import FrontLayout from "layouts/FrontLayout";

const MyPage = () => {
  return (
    <FrontLayout title="My Page Title">
      {/* Page content */}
    </FrontLayout>
  );
};
```

Change it to:

```tsx
// After
import FrontLayout from "layouts/FrontLayout";
import { generatePageMetadata } from "../utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata("My Page Title - Joint Heirs Assembly");

const MyPage = () => {
  return (
    <FrontLayout>
      {/* Page content */}
    </FrontLayout>
  );
};
```

Alternatively, you can define the metadata object directly:

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page Title - Joint Heirs Assembly",
  description: "Description of this page"
};
```

### 2. For Dynamic Pages

For pages with dynamic content, use the `generateMetadata` function:

```tsx
import { Metadata } from "next";

// For dynamic routes
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  // Fetch data
  const product = await getProduct(params.id);
  
  return {
    title: `${product.name} - Joint Heirs Assembly`,
    description: product.description,
  };
}
```

## Advanced Metadata Features

The Metadata API offers more features than just titles:

- **Description**: Add SEO descriptions
- **OpenGraph**: Add social media sharing metadata
- **Icons**: Customize favicon and other icons
- **Robots**: Control search engine behavior
- **Viewport**: Configure viewport settings

Example of advanced metadata:

```tsx
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
  openGraph: {
    title: "Page Title for Social Media",
    description: "Description for social media",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};
```

## Reference

For more information, see the official Next.js documentation:
- [Metadata API Reference](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead)