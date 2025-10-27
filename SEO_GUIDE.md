# SEO Configuration Guide

## Overview
Your project now has comprehensive SEO configuration using `react-helmet-async` for dynamic meta tag management.

## What's Included

### 1. Static Meta Tags (index.html)
Basic SEO meta tags are set in `index.html`:
- Primary meta tags (title, description, keywords, author, robots)
- Open Graph tags for Facebook/social media sharing
- Twitter Card tags for Twitter sharing
- Canonical URL
- Favicon (updated to use logo.svg)

### 2. Dynamic SEO Component
Located at: `src/components/SEO/SEO.tsx`

This component allows you to override meta tags dynamically for different pages or sections.

## How to Use

### Basic Usage (Current Setup)
The SEO component is already added to `App.tsx` with default values for FAIMCore.

### Customizing SEO for Different Pages
If you add routing later, you can customize SEO per page:

```tsx
import SEO from './components/SEO/SEO';

function AboutPage() {
  return (
    <>
      <SEO
        title="About Us - FAIMCore"
        description="Learn more about FAIMCore and our mission to deliver exceptional web solutions."
        url="https://faimcore.com/about"
      />
      {/* Your page content */}
    </>
  );
}
```

### Available SEO Props
- `title` - Page title (default: "FAIMCore - Web Software Company | Your Core, Our Aim")
- `description` - Page description for search results
- `keywords` - SEO keywords
- `ogImage` - Open Graph image URL (for social media sharing)
- `twitterImage` - Twitter card image URL
- `url` - Canonical URL for the page
- `locale` - Language locale (default: "en_US")

## Adding Social Media Images

To make your site look great when shared on social media:

1. Create an Open Graph image (1200x630px recommended)
2. Create a Twitter Card image (1200x600px recommended)
3. Place them in the `/public` folder
4. Update the image URLs in:
   - `index.html` (lines 21, 30)
   - `src/components/SEO/SEO.tsx` (default props)

## Important URLs to Update

Before going to production, update these URLs:
- `https://faimcore.com/` - Replace with your actual domain
- Image URLs for og:image and twitter:image
- Canonical URLs

## Testing SEO

### Test Tools:
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Open Graph Checker**: https://www.opengraph.xyz/

## Adding Ukrainian Language Support

To add Ukrainian language meta tags:

```tsx
<SEO
  title="FAIMCore - Веб Софтверна Компанія"
  description="..."
  locale="uk_UA"
/>
```

You can also add a language switcher that updates the locale prop based on the selected language.