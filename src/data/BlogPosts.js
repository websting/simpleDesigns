// src/data/blogPosts.js
import productivity from '../assets/productivity.jpg';
import designtiny from '../assets/designtiny.jpg';
import wireframingtiny from '../assets/wireframingtiny.jpg';


const blogPosts = [
  {
  id: 1,
  slug: "what-makes-a-good-website",
  title: "Key Elements of a Great Website",
  date: "Nov 22, 2025",
  excerpt: "A well-designed website is more than just looks—it’s about usability, performance, and engagement. Here’s what every successful website should have.",
  content: `
    <p>A good website isn’t just visually appealing—it’s functional, user-friendly, and optimized for both people and search engines. Here’s a breakdown of what makes a website truly great:</p>
    <ul class="list-disc pl-5">
      <li><strong>Clear Navigation:</strong> Visitors should find what they need quickly with an intuitive menu structure.</li>
      <li><strong>Responsive Design:</strong> A site that adapts seamlessly to mobile, tablet, and desktop screens.</li>
      <li><strong>Fast Load Times:</strong> Pages that load quickly reduce bounce rates and improve user satisfaction.</li>
      <li><strong>High-Quality Content:</strong> Engaging, informative content that provides real value to your audience.</li>
      <li><strong>SEO Best Practices:</strong> Optimized titles, meta descriptions, and structured content to rank higher in search engines.</li>
      <li><strong>Strong Visual Design:</strong> Clean layouts, consistent branding, and appealing graphics create a professional look.</li>
      <li><strong>Accessibility:</strong> Features like alt text, readable fonts, and proper color contrast ensure everyone can use your site.</li>
      <li><strong>Clear Calls-to-Action:</strong> Guide users to take the next step, whether it’s contacting you, signing up, or purchasing.</li>
    </ul>
    <p>Combining these elements creates a website that not only looks good but also performs well, engages visitors, and supports your goals effectively.</p>
  `,
  image: designtiny,
},

  {
    id: 2,
    slug: 'what-is-a-domain-name',
  title: "What Is a Domain Name — and Who Needs One?",
  date: "Nov 20, 2025",
  excerpt: "A simple guide to understanding domain names and why almost anyone building an online presence should have one.",
  content: `
  <p>A domain name is the easy-to-remember address people type to visit your website—like <strong>yourname.com</strong>. It helps others find you online and makes your brand look more professional.</p>

  <h2>Who Needs a Domain Name?</h2>

  <h3>1. Small Businesses</h3>
  <p>If you sell products or services, a domain name helps customers trust you and find your website quickly.</p>

  <h3>2. Creators & Entrepreneurs</h3>
  <p>Whether you're building a portfolio, launching an idea, or growing a personal brand, a custom domain makes you look polished and credible.</p>

  <h3>3. Freelancers</h3>
  <p>A domain gives you a clean spot for your work, contact info, and services—all in one place.</p>

  <h3>4. Anyone Wanting to Save Their Name</h3>
  <p>Not ready for a website yet? You can still register your domain now and use it later.</p>

  <p>In short: if you want people to find you online—or plan to build something in the future—a domain name is a smart place to start.</p>
  `,

    image: productivity,
  },
  {
    id: 3,
    slug:  "high-converting-templates",
    title: "How We Build Templates That Convert",
    date: "Jul 15, 2025",
    excerpt: "Explore our design philosophy and technical stack for building fast, beautiful, and effective templates.",
    content: `
  <p>Creating templates that truly convert requires more than just good design. It’s about understanding user behavior and crafting every element to encourage action. Whether it’s signing up, purchasing, or exploring content, each part of the template plays a role.</p>

  <h2>Key principles we follow:</h2>
  <ul class="list-disc pl-5">
    <li><strong>Clear calls-to-action:</strong> We make buttons and links stand out, guiding users effortlessly toward the next step.</li>
    <li><strong>Focused content:</strong> Every headline and paragraph is written to be concise, persuasive, and aligned with user goals.</li>
    <li><strong>Optimized performance:</strong> Fast load times and smooth responsiveness keep users engaged and reduce drop-offs.</li>
    <li><strong>Flexible layouts:</strong> Modular components let users easily customize without breaking the flow or design.</li>
    <li><strong>Tested usability:</strong> We rigorously test templates across devices and real scenarios to ensure seamless user experiences.</li>
  </ul>

  <p>By combining these elements thoughtfully, we create templates that don’t just look great — they help businesses grow by converting visitors into customers.</p>
`,

    image: wireframingtiny,
  },
];

export default blogPosts;


