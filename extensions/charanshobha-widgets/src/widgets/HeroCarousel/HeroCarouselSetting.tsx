import React, { useEffect, useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import {
  ArrowDown,
  ArrowUp,
  ImagePlus,
  Plus,
  Trash2,
  X
} from 'lucide-react';
import { FileBrowser } from '@evershop/evershop/components/admin/FileBrowser';
import { normalizeImageSrc } from '@evershop/evershop/components/common/page-builder/normalizeImageSrc';
import { LinkPicker } from '@evershop/evershop/components/common/page-builder/pickers/LinkPicker';
import {
  useScopedFieldName,
  useScopedFormContext
} from '@evershop/evershop/components/common/page-builder/WidgetSettingsScope';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { Input } from '@evershop/evershop/components/common/ui/Input';
import { Switch } from '@evershop/evershop/components/common/ui/Switch';

interface Slide {
  id: string;
  image: string;
  mobileImage: string;
  width: number;
  height: number;
  mobileWidth: number;
  mobileHeight: number;
  eyebrow: string;
  headline: string;
  subText: string;
  buttonText: string;
  buttonLink: string;
}

interface Props {
  heroCarouselWidget?: {
    slides?: Slide[];
    autoplay?: boolean;
    autoplaySpeed?: number;
  };
}

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <div className="text-[11px] font-semibold tracking-wide text-foreground/80">
        {label}
      </div>
      {children}
    </div>
  );
}

export default function HeroCarouselSetting({ heroCarouselWidget }: Props) {
  const {
    slides = [],
    autoplay = true,
    autoplaySpeed = 5000
  } = heroCarouselWidget ?? {};

  const { control, setValue, watch } = useScopedFormContext();
  const slidesName = useScopedFieldName('settings.slides');
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: slidesName
  });

  const current = (watch('settings.slides', slides) ?? []) as Slide[];
  const isAutoplay = Boolean(watch('settings.autoplay', autoplay));
  const speed = Number(watch('settings.autoplaySpeed', autoplaySpeed)) || 5000;

  const [picker, setPicker] = useState<{
    index: number;
    kind: 'desktop' | 'mobile';
  } | null>(null);
  const [open, setOpen] = useState<number | null>(fields.length ? 0 : null);

  // seed the form so autosave captures defaults without waiting for an edit
  useEffect(() => {
    setValue('settings.slides', current);
    setValue('settings.autoplay', isAutoplay);
    setValue('settings.autoplaySpeed', speed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // path-level setValue keeps useFieldArray ids stable, so inputs don't lose focus
  const update = (idx: number, patch: Partial<Slide>) =>
    Object.entries(patch).forEach(([k, v]) =>
      setValue(`settings.slides.${idx}.${k}`, v)
    );

  const measure = (url: string, idx: number, kind: 'desktop' | 'mobile') => {
    const img = new Image();
    img.onload = () =>
      update(
        idx,
        kind === 'desktop'
          ? { width: img.naturalWidth, height: img.naturalHeight }
          : { mobileWidth: img.naturalWidth, mobileHeight: img.naturalHeight }
      );
    img.src = url;
  };

  const onPick = (filePath: string) => {
    if (!picker) return;
    const url = normalizeImageSrc(filePath);
    update(
      picker.index,
      picker.kind === 'desktop' ? { image: url } : { mobileImage: url }
    );
    measure(url, picker.index, picker.kind);
    setPicker(null);
  };

  const addSlide = () => {
    append({
      id: crypto.randomUUID(),
      image: '',
      mobileImage: '',
      width: 0,
      height: 0,
      mobileWidth: 0,
      mobileHeight: 0,
      eyebrow: '',
      headline: '',
      subText: '',
      buttonText: '',
      buttonLink: ''
    });
    setTimeout(() => setOpen(fields.length), 0);
  };

  const ImageSlot = ({
    idx,
    kind,
    url,
    label
  }: {
    idx: number;
    kind: 'desktop' | 'mobile';
    url: string;
    label: string;
  }) => (
    <Field label={label}>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setPicker({ index: idx, kind })}
          className="flex h-16 w-24 items-center justify-center overflow-hidden border border-dashed bg-muted/30 hover:bg-muted"
          aria-label={`Choose ${label.toLowerCase()}`}
        >
          {url ? (
            <img src={url} alt="" className="h-full w-full object-cover" />
          ) : (
            <ImagePlus className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
        {url && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() =>
              update(
                idx,
                kind === 'desktop'
                  ? { image: '', width: 0, height: 0 }
                  : { mobileImage: '', mobileWidth: 0, mobileHeight: 0 }
              )
            }
          >
            <X className="mr-1 h-3.5 w-3.5" /> Remove
          </Button>
        )}
      </div>
    </Field>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Autoplay</span>
        <Switch
          checked={isAutoplay}
          onCheckedChange={(v: boolean) => setValue('settings.autoplay', v)}
        />
      </div>
      {isAutoplay && (
        <Field label="Seconds per slide">
          <Input
            type="number"
            min={1}
            max={30}
            value={Math.round(speed / 1000)}
            onChange={(e) =>
              setValue(
                'settings.autoplaySpeed',
                Math.max(1, Math.min(30, Number(e.target.value) || 5)) * 1000
              )
            }
          />
        </Field>
      )}

      <div className="space-y-2">
        {fields.map((f, idx) => {
          const s = current[idx] ?? ({} as Slide);
          const isOpen = open === idx;
          return (
            <div key={f.id} className="border bg-card">
              <div className="flex items-center gap-2 px-3 py-2">
                <button
                  type="button"
                  className="flex min-w-0 flex-1 items-center gap-3 text-left"
                  onClick={() => setOpen(isOpen ? null : idx)}
                >
                  <span className="h-9 w-14 shrink-0 overflow-hidden bg-muted">
                    {s.image && (
                      <img src={s.image} alt="" className="h-full w-full object-cover" />
                    )}
                  </span>
                  <span className="truncate text-sm font-medium">
                    {s.headline || `Slide ${idx + 1}`}
                  </span>
                </button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Move up"
                  disabled={idx === 0}
                  onClick={() => {
                    move(idx, idx - 1);
                    setOpen(null);
                  }}
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Move down"
                  disabled={idx === fields.length - 1}
                  onClick={() => {
                    move(idx, idx + 1);
                    setOpen(null);
                  }}
                >
                  <ArrowDown className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Delete slide"
                  onClick={() => {
                    remove(idx);
                    setOpen(null);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              {isOpen && (
                <div className="space-y-3 border-t px-3 py-3">
                  <ImageSlot idx={idx} kind="desktop" url={s.image} label="Desktop image" />
                  <ImageSlot idx={idx} kind="mobile" url={s.mobileImage} label="Mobile image (optional)" />
                  <Field label="Eyebrow">
                    <Input
                      value={s.eyebrow ?? ''}
                      onChange={(e) => update(idx, { eyebrow: e.target.value })}
                      placeholder="New season"
                    />
                  </Field>
                  <Field label="Headline">
                    <Input
                      value={s.headline ?? ''}
                      onChange={(e) => update(idx, { headline: e.target.value })}
                      placeholder="Step into comfort"
                    />
                  </Field>
                  <Field label="Subtext">
                    <Input
                      value={s.subText ?? ''}
                      onChange={(e) => update(idx, { subText: e.target.value })}
                    />
                  </Field>
                  <Field label="Button text">
                    <Input
                      value={s.buttonText ?? ''}
                      onChange={(e) => update(idx, { buttonText: e.target.value })}
                      placeholder="Shop now"
                    />
                  </Field>
                  <Field label="Button link">
                    <LinkPicker
                      value={s.buttonLink ?? ''}
                      onChange={({ url }) => update(idx, { buttonLink: url })}
                    />
                  </Field>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Button type="button" variant="outline" className="w-full" onClick={addSlide}>
        <Plus className="mr-1 h-4 w-4" /> Add slide
      </Button>

      {picker && (
        <FileBrowser
          accept={['image/*']}
          isMultiple={false}
          onInsert={onPick}
          close={() => setPicker(null)}
        />
      )}
    </div>
  );
}

export const query = `
  query Query($slides: JSON, $autoplay: Boolean, $autoplaySpeed: Int) {
    heroCarouselWidget(slides: $slides, autoplay: $autoplay, autoplaySpeed: $autoplaySpeed) {
      slides
      autoplay
      autoplaySpeed
    }
  }
`;

export const variables = `{
  slides: getWidgetSetting("slides"),
  autoplay: getWidgetSetting("autoplay"),
  autoplaySpeed: getWidgetSetting("autoplaySpeed")
}`;
