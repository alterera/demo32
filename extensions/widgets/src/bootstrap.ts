import path from 'path';
import { fileURLToPath } from 'url';
import { registerWidget } from '@evershop/evershop/lib/widget';

const here = path.dirname(fileURLToPath(import.meta.url));
const widgetFile = (name: string) =>
  path.resolve(here, 'widgets', 'HeroCarousel', `${name}.js`);

export default function bootstrap() {
  registerWidget({
    type: 'hero_carousel',
    name: 'Hero Carousel',
    description: 'Full-width image carousel with headline and button per slide',
    category: 'marketing',
    icon: 'Images',
    enabled: true,
    component: widgetFile('HeroCarousel'),
    settingComponent: widgetFile('HeroCarouselSetting'),
    previewComponent: widgetFile('HeroCarouselPreview'),
    defaultSettings: {
      autoplay: true,
      autoplaySpeed: 5000,
      slides: []
    },
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
  } as unknown as Parameters<typeof registerWidget>[0]);
}
