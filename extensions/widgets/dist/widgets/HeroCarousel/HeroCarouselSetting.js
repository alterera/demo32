import React, { useEffect, useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import { ArrowDown, ArrowUp, ImagePlus, Plus, Trash2, X } from 'lucide-react';
import { FileBrowser } from '@evershop/evershop/components/admin/FileBrowser';
import { normalizeImageSrc } from '@evershop/evershop/components/common/page-builder/normalizeImageSrc';
import { LinkPicker } from '@evershop/evershop/components/common/page-builder/pickers/LinkPicker';
import { useScopedFieldName, useScopedFormContext } from '@evershop/evershop/components/common/page-builder/WidgetSettingsScope';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { Input } from '@evershop/evershop/components/common/ui/Input';
import { Switch } from '@evershop/evershop/components/common/ui/Switch';
function Field({ label, children }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: "space-y-1.5"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "text-[11px] font-semibold tracking-wide text-foreground/80"
    }, label), children);
}
export default function HeroCarouselSetting({ heroCarouselWidget }) {
    const { slides = [], autoplay = true, autoplaySpeed = 5000 } = heroCarouselWidget ?? {};
    const { control, setValue, watch } = useScopedFormContext();
    const slidesName = useScopedFieldName('settings.slides');
    const { fields, append, remove, move } = useFieldArray({
        control,
        name: slidesName
    });
    const current = watch('settings.slides', slides) ?? [];
    const isAutoplay = Boolean(watch('settings.autoplay', autoplay));
    const speed = Number(watch('settings.autoplaySpeed', autoplaySpeed)) || 5000;
    const [picker, setPicker] = useState(null);
    const [open, setOpen] = useState(fields.length ? 0 : null);
    // seed the form so autosave captures defaults without waiting for an edit
    useEffect(()=>{
        setValue('settings.slides', current);
        setValue('settings.autoplay', isAutoplay);
        setValue('settings.autoplaySpeed', speed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // path-level setValue keeps useFieldArray ids stable, so inputs don't lose focus
    const update = (idx, patch)=>Object.entries(patch).forEach(([k, v])=>setValue(`settings.slides.${idx}.${k}`, v));
    const measure = (url, idx, kind)=>{
        const img = new Image();
        img.onload = ()=>update(idx, kind === 'desktop' ? {
                width: img.naturalWidth,
                height: img.naturalHeight
            } : {
                mobileWidth: img.naturalWidth,
                mobileHeight: img.naturalHeight
            });
        img.src = url;
    };
    const onPick = (filePath)=>{
        if (!picker) return;
        const url = normalizeImageSrc(filePath);
        update(picker.index, picker.kind === 'desktop' ? {
            image: url
        } : {
            mobileImage: url
        });
        measure(url, picker.index, picker.kind);
        setPicker(null);
    };
    const addSlide = ()=>{
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
        setTimeout(()=>setOpen(fields.length), 0);
    };
    const ImageSlot = ({ idx, kind, url, label })=>/*#__PURE__*/ React.createElement(Field, {
            label: label
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center gap-3"
        }, /*#__PURE__*/ React.createElement("button", {
            type: "button",
            onClick: ()=>setPicker({
                    index: idx,
                    kind
                }),
            className: "flex h-16 w-24 items-center justify-center overflow-hidden border border-dashed bg-muted/30 hover:bg-muted",
            "aria-label": `Choose ${label.toLowerCase()}`
        }, url ? /*#__PURE__*/ React.createElement("img", {
            src: url,
            alt: "",
            className: "h-full w-full object-cover"
        }) : /*#__PURE__*/ React.createElement(ImagePlus, {
            className: "h-5 w-5 text-muted-foreground"
        })), url && /*#__PURE__*/ React.createElement(Button, {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: ()=>update(idx, kind === 'desktop' ? {
                    image: '',
                    width: 0,
                    height: 0
                } : {
                    mobileImage: '',
                    mobileWidth: 0,
                    mobileHeight: 0
                })
        }, /*#__PURE__*/ React.createElement(X, {
            className: "mr-1 h-3.5 w-3.5"
        }), " Remove")));
    return /*#__PURE__*/ React.createElement("div", {
        className: "space-y-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center justify-between"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "text-sm font-medium"
    }, "Autoplay"), /*#__PURE__*/ React.createElement(Switch, {
        checked: isAutoplay,
        onCheckedChange: (v)=>setValue('settings.autoplay', v)
    })), isAutoplay && /*#__PURE__*/ React.createElement(Field, {
        label: "Seconds per slide"
    }, /*#__PURE__*/ React.createElement(Input, {
        type: "number",
        min: 1,
        max: 30,
        value: Math.round(speed / 1000),
        onChange: (e)=>setValue('settings.autoplaySpeed', Math.max(1, Math.min(30, Number(e.target.value) || 5)) * 1000)
    })), /*#__PURE__*/ React.createElement("div", {
        className: "space-y-2"
    }, fields.map((f, idx)=>{
        const s = current[idx] ?? {};
        const isOpen = open === idx;
        return /*#__PURE__*/ React.createElement("div", {
            key: f.id,
            className: "border bg-card"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center gap-2 px-3 py-2"
        }, /*#__PURE__*/ React.createElement("button", {
            type: "button",
            className: "flex min-w-0 flex-1 items-center gap-3 text-left",
            onClick: ()=>setOpen(isOpen ? null : idx)
        }, /*#__PURE__*/ React.createElement("span", {
            className: "h-9 w-14 shrink-0 overflow-hidden bg-muted"
        }, s.image && /*#__PURE__*/ React.createElement("img", {
            src: s.image,
            alt: "",
            className: "h-full w-full object-cover"
        })), /*#__PURE__*/ React.createElement("span", {
            className: "truncate text-sm font-medium"
        }, s.headline || `Slide ${idx + 1}`)), /*#__PURE__*/ React.createElement(Button, {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            "aria-label": "Move up",
            disabled: idx === 0,
            onClick: ()=>{
                move(idx, idx - 1);
                setOpen(null);
            }
        }, /*#__PURE__*/ React.createElement(ArrowUp, {
            className: "h-4 w-4"
        })), /*#__PURE__*/ React.createElement(Button, {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            "aria-label": "Move down",
            disabled: idx === fields.length - 1,
            onClick: ()=>{
                move(idx, idx + 1);
                setOpen(null);
            }
        }, /*#__PURE__*/ React.createElement(ArrowDown, {
            className: "h-4 w-4"
        })), /*#__PURE__*/ React.createElement(Button, {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            "aria-label": "Delete slide",
            onClick: ()=>{
                remove(idx);
                setOpen(null);
            }
        }, /*#__PURE__*/ React.createElement(Trash2, {
            className: "h-4 w-4"
        }))), isOpen && /*#__PURE__*/ React.createElement("div", {
            className: "space-y-3 border-t px-3 py-3"
        }, /*#__PURE__*/ React.createElement(ImageSlot, {
            idx: idx,
            kind: "desktop",
            url: s.image,
            label: "Desktop image"
        }), /*#__PURE__*/ React.createElement(ImageSlot, {
            idx: idx,
            kind: "mobile",
            url: s.mobileImage,
            label: "Mobile image (optional)"
        }), /*#__PURE__*/ React.createElement(Field, {
            label: "Eyebrow"
        }, /*#__PURE__*/ React.createElement(Input, {
            value: s.eyebrow ?? '',
            onChange: (e)=>update(idx, {
                    eyebrow: e.target.value
                }),
            placeholder: "New season"
        })), /*#__PURE__*/ React.createElement(Field, {
            label: "Headline"
        }, /*#__PURE__*/ React.createElement(Input, {
            value: s.headline ?? '',
            onChange: (e)=>update(idx, {
                    headline: e.target.value
                }),
            placeholder: "Step into comfort"
        })), /*#__PURE__*/ React.createElement(Field, {
            label: "Subtext"
        }, /*#__PURE__*/ React.createElement(Input, {
            value: s.subText ?? '',
            onChange: (e)=>update(idx, {
                    subText: e.target.value
                })
        })), /*#__PURE__*/ React.createElement(Field, {
            label: "Button text"
        }, /*#__PURE__*/ React.createElement(Input, {
            value: s.buttonText ?? '',
            onChange: (e)=>update(idx, {
                    buttonText: e.target.value
                }),
            placeholder: "Shop now"
        })), /*#__PURE__*/ React.createElement(Field, {
            label: "Button link"
        }, /*#__PURE__*/ React.createElement(LinkPicker, {
            value: s.buttonLink ?? '',
            onChange: ({ url })=>update(idx, {
                    buttonLink: url
                })
        }))));
    })), /*#__PURE__*/ React.createElement(Button, {
        type: "button",
        variant: "outline",
        className: "w-full",
        onClick: addSlide
    }, /*#__PURE__*/ React.createElement(Plus, {
        className: "mr-1 h-4 w-4"
    }), " Add slide"), picker && /*#__PURE__*/ React.createElement(FileBrowser, {
        accept: [
            'image/*'
        ],
        isMultiple: false,
        onInsert: onPick,
        close: ()=>setPicker(null)
    }));
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
