Implement UI enhancements to match jointheirsassembly.org, focusing on the following key areas:

### 2. Homepage Hero Optimization

- Debug non-loading hero image
- Implement responsive image loading using `srcset` and `sizes`
- Match production dimensions: desktop (1920x800px), mobile (375x500px)
- Ensure proper image compression and loading performance

### 3. Donation Section Development

- Implement grid-based layout matching production: 1-column mobile, 2-column desktop
- Build component hierarchy:
  - Main heading (36px/48px)
  - Subheading (24px/32px)
  - Description text (16px/24px)
  - CTA button with hover states
- Add donation amount selector
- Ensure WCAG 2.1 AA compliance for all interactive elements

### 4. Design System Alignment

- Typography:
  - Primary font: [Specify font family]
  - Heading scales: h1 (48px) to h6 (16px)
  - Body text: 16px/1.5
- Spacing:
  - Use 8px grid system
  - Section padding: desktop (80px), mobile (40px)
  - Component margins: 24px default
- Component hierarchy using consistent visual weight

### 5. Sermon Section Redesign

- Implement CSS Grid layout for sermon cards
- Card structure:
  - Featured image (16:9 ratio)
  - Title (24px)
  - Date and speaker info (14px)
  - Preview text (16px)
- Responsive behavior:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column

### Technical Requirements:

- Use CSS custom properties for colors and typography
- Implement responsive breakpoints: 768px, 1024px, 1440px
- Ensure < 2s load time for key components
- Maintain 90+ Lighthouse performance score
- Cross-browser compatibility: Chrome, Firefox, Safari, Edge

Deliver:

1. Production-ready CSS/HTML implementations
2. Component documentation with usage guidelines
3. Performance metrics for each section
4. Browser testing results
5. Accessibility compliance report
