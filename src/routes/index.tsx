import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '../components/home-page';

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title: 'Nexus AI Agency | Autonomous AI Receptionists & 2026 AEO Optimization',
      },
      {
        name: 'description',
        content: 'Nexus AI builds 24/7 AI Voice Receptionists, WhatsApp Speed-to-Lead pipelines, and AEO Schema architecture for high-growth healthcare and service firms.',
      },
      {
        property: 'og:title',
        content: 'Nexus AI Agency | Autonomous AI Receptionists & 2026 AEO Optimization',
      },
      {
        property: 'og:description',
        content: 'Recover 100% of missed calls and rank in ChatGPT Search, Perplexity, and Google Maps with sub-800ms conversational AI voice agents.',
      },
      {
        property: 'og:url',
        content: 'https://www.nexusaiagency.in/',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://www.nexusaiagency.in/',
      },
      {
        rel: 'llms-txt',
        href: 'https://www.nexusaiagency.in/llms.txt',
      },
    ],
  }),
});