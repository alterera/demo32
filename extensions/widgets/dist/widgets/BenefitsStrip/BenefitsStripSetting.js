import React, { useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react';
import { useScopedFieldName, useScopedFormContext } from '@evershop/evershop/components/common/page-builder/WidgetSettingsScope';
import { Button } from '@evershop/evershop/components/common/ui/Button';
import { Input } from '@evershop/evershop/components/common/ui/Input';
import { DEFAULT_ITEMS, ICON_OPTIONS } from './icons.js';
export default function BenefitsStripSetting({ benefitsStripWidget }) {
    const initial = benefitsStripWidget?.items?.length
        ? benefitsStripWidget.items
        : DEFAULT_ITEMS;
    const { control, setValue, watch } = useScopedFormContext();
    const name = useScopedFieldName('settings.items');
    const { fields, append, remove, move } = useFieldArray({ control, name });
    const current = (watch('settings.items', initial) ?? []);
    useEffect(() => {
        setValue('settings.items', current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // path-level setValue keeps field ids stable so inputs keep focus while typing
    const update = (idx, key, value) => setValue(`settings.items.${idx}.${key}`, value);
    return (React.createElement("div", { className: "space-y-3" },
        fields.map((f, idx) => {
            const item = current[idx] ?? {};
            return (React.createElement("div", { key: f.id, className: "space-y-2 border bg-card p-3" },
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement("select", { "aria-label": "Icon", value: item.icon ?? 'verified', onChange: (e) => update(idx, 'icon', e.target.value), className: "h-9 flex-1 border bg-background px-2 text-sm" }, ICON_OPTIONS.map((o) => (React.createElement("option", { key: o.value, value: o.value }, o.label)))),
                    React.createElement(Button, { type: "button", variant: "ghost", size: "icon-sm", "aria-label": "Move up", disabled: idx === 0, onClick: () => move(idx, idx - 1) },
                        React.createElement(ArrowUp, { className: "h-4 w-4" })),
                    React.createElement(Button, { type: "button", variant: "ghost", size: "icon-sm", "aria-label": "Move down", disabled: idx === fields.length - 1, onClick: () => move(idx, idx + 1) },
                        React.createElement(ArrowDown, { className: "h-4 w-4" })),
                    React.createElement(Button, { type: "button", variant: "ghost", size: "icon-sm", "aria-label": "Delete item", onClick: () => remove(idx) },
                        React.createElement(Trash2, { className: "h-4 w-4" }))),
                React.createElement(Input, { "aria-label": "Title", placeholder: "Title", value: item.title ?? '', onChange: (e) => update(idx, 'title', e.target.value) }),
                React.createElement(Input, { "aria-label": "Description", placeholder: "Short description", value: item.text ?? '', onChange: (e) => update(idx, 'text', e.target.value) })));
        }),
        React.createElement(Button, { type: "button", variant: "outline", className: "w-full", onClick: () => append({ id: crypto.randomUUID(), icon: 'verified', title: '', text: '' }) },
            React.createElement(Plus, { className: "mr-1 h-4 w-4" }),
            " Add item")));
}
export const query = `
  query Query($items: JSON) {
    benefitsStripWidget(items: $items) {
      items
    }
  }
`;
export const variables = `{
  items: getWidgetSetting("items")
}`;
