import { resolveLink } from '@evershop/evershop/lib/widget/linkResolver';
export default {
    Query: {
        heroCarouselWidget: async (_, { slides, autoplay, autoplaySpeed }, { linkLoaders })=>{
            const raw = Array.isArray(slides) ? slides : [];
            // Button links may be stored as URNs (page, category, product...) or plain URLs.
            const resolved = await Promise.all(raw.map(async (s)=>{
                if (!s || typeof s !== 'object') return s;
                const link = await resolveLink(s.buttonLink, linkLoaders);
                return {
                    ...s,
                    buttonLink: link ?? s.buttonLink ?? null
                };
            }));
            const speed = Number(autoplaySpeed);
            return {
                slides: resolved,
                autoplay: autoplay !== undefined && autoplay !== null ? Boolean(autoplay) : true,
                autoplaySpeed: Number.isFinite(speed) && speed >= 1000 ? speed : 5000
            };
        }
    }
};
