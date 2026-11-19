import path from 'path';
import { fileURLToPath } from 'url';
import { registerWidget } from '@evershop/evershop/lib/widget';

const here = path.dirname(fileURLToPath(import.meta.url));
const file = (dir: string, name: string) =>
  path.resolve(here, 'widgets', dir, `${name}.js`);

type WidgetDef = Parameters<typeof registerWidget>[0];
const register = (def: unknown) => registerWidget(def as WidgetDef);

export default function bootstrap() {
  register({
    type: 'hero_carousel',
    name: 'Hero Carousel',
    description: 'Full-width image carousel with headline and button per slide',
    category: 'marketing',
    icon: 'Images',
    enabled: true,
    component: file('HeroCarousel', 'HeroCarousel'),
    settingComponent: file('HeroCarousel', 'HeroCarouselSetting'),
    previewComponent: file('HeroCarousel', 'HeroCarouselPreview'),
    defaultSettings: { autoplay: true, autoplaySpeed: 5000, slides: [] },
    schema: {
      type: 'object',
      additionalProperties: true,
      properties: {
        autoplay: { type: 'boolean' },
        autoplaySpeed: { type: 'integer' },
        slides: { type: 'array', items: { type: 'object' } }
      }
    },
    graphql: {
      typeDefs: `
        type HeroCarouselSettings {
          autoplay: Boolean
          autoplaySpeed: Int
          slides: JSON
        }
      `,
      settingsType: 'HeroCarouselSettings'
    }
  });

  register({
    type: 'benefits_strip',
    name: 'Benefits Strip',
    description: 'Row of icon, title and short text: delivery, returns, payment',
    category: 'marketing',
    icon: 'BadgeCheck',
    enabled: true,
    component: file('BenefitsStrip', 'BenefitsStrip'),
    settingComponent: file('BenefitsStrip', 'BenefitsStripSetting'),
    previewComponent: file('BenefitsStrip', 'BenefitsStripPreview'),
    defaultSettings: {
      items: [
        { id: 'b1', icon: 'truck', title: 'Fast delivery', text: 'Across the country' },
        { id: 'b2', icon: 'returns', title: 'Easy returns', text: '7-day size exchange' },
        { id: 'b3', icon: 'cod', title: 'Cash on delivery', text: 'Pay when it arrives' },
        { id: 'b4', icon: 'quality', title: 'Quality assured', text: 'Durable materials' }
      ]
    },
    schema: {
      type: 'object',
      additionalProperties: true,
      properties: {
        items: { type: 'array', items: { type: 'object' } }
      }
    },
    graphql: {
      typeDefs: `
        type BenefitsStripSettings {
          items: JSON
        }
      `,
      settingsType: 'BenefitsStripSettings'
    }
  });
}
