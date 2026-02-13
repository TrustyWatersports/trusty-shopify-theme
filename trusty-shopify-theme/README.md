# Trusty Sail & Paddle - Shopify Theme

Custom Shopify theme for Trusty Sail & Paddle watersports business, featuring:
- Custom rigging business focus
- Multi-segment homepage (anglers, local shoppers, beginners, sailing enthusiasts)
- Product catalog with filtering
- Custom rigging packages page
- Responsive design

## 📁 Theme Structure

```
trusty-shopify-theme/
├── layout/
│   └── theme.liquid          # Main layout wrapper
├── templates/
│   ├── index.liquid           # Homepage
│   ├── collection.liquid      # Product catalog pages
│   ├── product.liquid         # Individual product pages
│   └── page.custom-rigging.liquid  # Custom rigging page
├── snippets/
│   └── meta-tags.liquid       # SEO meta tags
├── assets/
│   └── theme.js               # Theme JavaScript
├── config/
│   └── settings_schema.json   # Theme configuration
├── sections/                  # (empty - can add later)
└── locales/                   # (empty - can add later)
```

## 🚀 Installation Methods

### Method 1: Using Shopify CLI (Recommended - what we're doing!)

**Prerequisites:**
- Node.js installed ✓
- Git installed ✓
- Shopify CLI installed ✓
- Authenticated with Shopify ✓

**Steps:**

1. **Navigate to theme directory:**
   ```bash
   cd /path/to/trusty-shopify-theme
   ```

2. **Initialize theme:**
   ```bash
   shopify theme init
   ```

3. **Push theme to Shopify:**
   ```bash
   shopify theme push
   ```
   
   You'll be asked:
   - Which store? (Select your store)
   - Push to development theme or live theme? (Choose development for testing)

4. **Preview your theme:**
   ```bash
   shopify theme dev
   ```
   This opens a local development server with hot-reload!

### Method 2: Upload via Shopify Admin

1. Zip the entire `trusty-shopify-theme` folder
2. Go to: Shopify Admin → Online Store → Themes
3. Click "Add theme" → "Upload ZIP file"
4. Upload the zip file

## 🎨 Key Features

### Homepage (`templates/index.liquid`)
- Hero section with dual CTAs (Custom Rigging + Shop Kayaks)
- Trust indicators (200+ rigs, 60+ showroom kayaks, etc.)
- Custom rigging benefits showcase
- Dynamic product grid from Fishing Kayaks collection
- Local advantages section
- Customer testimonials
- Strong CTAs throughout

### Collection Pages (`templates/collection.liquid`)
- Filterable product grid (type, propulsion, price)
- Stock status badges
- Custom rigging CTA on each product
- Responsive layout
- Sorting options

### Product Pages (`templates/product.liquid`)
- Image gallery
- Add to cart functionality
- Variant selection
- Stock status
- Prominent custom rigging CTA
- Key features list
- Related products

### Custom Rigging Page (`templates/page.custom-rigging.liquid`)
- Three-tier package structure:
  - Essential Angler ($1,499)
  - Serious Fisher ($2,999) [Most Popular]
  - Tournament Pro ($5,999)
- Popular add-ons section
- "Why choose us" benefits
- Clear CTAs

## 🛠️ Customization

### Colors (in `layout/theme.liquid`)
```css
:root {
  --ocean-deep: #0A4B78;
  --ocean-medium: #1E6FA8;
  --ocean-light: #4A9CD6;
  --rigging-accent: #00A86B;
  --sunrise: #FF6B35;
  --text-dark: #2C3E50;
}
```

### To modify:
1. Edit color values in the `:root` section
2. Save and push changes

## 📝 Next Steps

### Required Setup in Shopify Admin:

1. **Create Collections:**
   - Fishing Kayaks
   - Pedal Kayaks
   - Sailboats
   - Accessories
   - Used Kayaks

2. **Add Products:**
   - Upload kayak products
   - Add product images
   - Set prices and inventory
   - Assign to collections

3. **Create Pages:**
   - Custom Rigging (use template: page.custom-rigging)
   - Rentals
   - Showroom
   - Contact
   - About

4. **Configure Navigation:**
   - Set up main menu
   - Link to collections and pages

5. **Set up Domain:**
   - Connect trustysailandpaddle.com

6. **Install Apps (Optional):**
   - Custom Product Builder (for rigging configurator)
   - Judge.me or Loox (reviews)
   - Klaviyo (email marketing)

## 🎯 Product Configurator Setup

For the custom rigging configurator:

**Recommended App: Custom Product Builder**
- Cost: $39.99/month
- Allows kayak → package → accessories flow
- Real-time pricing
- Conditional logic

**Installation:**
1. Install Custom Product Builder from Shopify App Store
2. Create configurator for "Custom Rigged Kayak" product
3. Add kayak base options
4. Add rigging packages
5. Add accessories as add-ons

## 💡 Tips

- **Development Theme**: Always test on a development theme first
- **Backup**: Keep this theme code in GitHub
- **Images**: Upload high-quality kayak images (1200x800px minimum)
- **SEO**: Add meta descriptions to all products and pages
- **Mobile**: Test on mobile devices - theme is responsive but verify

## 🐛 Troubleshooting

**Theme won't upload:**
- Make sure all folders exist (even if empty)
- Check that `layout/theme.liquid` exists
- Verify JSON files have valid syntax

**Products not showing:**
- Create "Fishing Kayaks" collection in Shopify admin
- Add products to that collection
- Collection handle must be "fishing-kayaks"

**Filtering not working:**
- Client-side filtering is basic
- For advanced filtering, use Shopify search & discovery app
- Or install filter app from Shopify App Store

## 📞 Support

Questions about the theme? Contact via GitHub or Shopify Partners.

## 📄 License

Custom theme for Trusty Sail & Paddle. All rights reserved.
