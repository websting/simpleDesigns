// src/data/blogPosts.js
import productivity from '../assets/productivity.jpg';
import designtiny from '../assets/designtiny.jpg';
import wireframingtiny from '../assets/wireframingtiny.jpg';



const blogPosts = [
  {
  id: 1,
  slug: "key-elements-of-a-web-host",
  title: "Key Elements of a Quality Web Host",
  date: "Nov 25, 2025",
  excerpt: "Choosing the right web host is crucial for your website’s performance, security, and growth. Here are the key features every reliable web hosting provider should offer.",
  content: `
    <p>Choosing the right web hosting provider is one of the most important decisions for your website. A quality host ensures your site is fast, secure, and always accessible. Here are the key elements to look for:</p>
    <ul class="list-disc pl-5">
      <li><strong>Reliable Uptime:</strong> Look for at least 99.9% uptime so your site remains online without interruptions.</li>
      <li><strong>Fast Loading Speeds:</strong> Optimized servers, SSD storage, and caching tools improve site performance and user experience.</li>
      <li><strong>Strong Security Features:</strong> SSL certificates, firewalls, malware scans, and automated backups protect your website and visitors.</li>
      <li><strong>Scalable Resources:</strong> Easily upgrade storage, CPU, or bandwidth as your site grows without downtime.</li>
      <li><strong>User-Friendly Control Panel:</strong> Tools like cPanel or Plesk simplify website, email, and domain management.</li>
      <li><strong>Responsive Technical Support:</strong> 24/7 support ensures help is available whenever you encounter issues.</li>
      <li><strong>Daily Backups:</strong> Automated backups protect your data and allow easy recovery if needed.</li>
      <li><strong>Domain and Email Integration:</strong> Register your domain and create professional email accounts directly with your host.</li>
      <li><strong>Transparent Pricing:</strong> Clear plans with no hidden fees give peace of mind and predictable costs.</li>
      <li><strong>Proven Reputation:</strong> Positive customer reviews and a strong track record indicate a trustworthy provider.</li>
    </ul>
    <p>By focusing on these key elements, you can select a web host that provides a solid foundation for your website, keeping it fast, secure, and ready to grow your online presence.</p>
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

  <h3>1. <strong>Small Businesses</strong></h3>
  <p>If you sell products or services, a domain name helps customers trust you and find your website quickly.</p>

  <h3>2. <strong>Creators & Entrepreneurs</strong></h3>
  <p>Whether you're building a portfolio, launching an idea, or growing a personal brand, a custom domain makes you look polished and credible.</p>

  <h3>3. <strong>Freelancers</strong></h3>
  <p>A domain gives you a clean spot for your work, contact info, and services—all in one place.</p>

  <h3>4. <strong>Anyone Wanting to Save Their Name</strong></h3>
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


