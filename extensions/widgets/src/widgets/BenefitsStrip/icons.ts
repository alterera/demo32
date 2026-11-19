import {
  BadgeCheck,
  Banknote,
  Gift,
  Headset,
  Package,
  RotateCcw,
  ShieldCheck,
  Truck,
  type LucideIcon
} from 'lucide-react';

export const ICONS: Record<string, LucideIcon> = {
  truck: Truck,
  returns: RotateCcw,
  cod: Banknote,
  quality: ShieldCheck,
  support: Headset,
  gift: Gift,
  package: Package,
  verified: BadgeCheck
};

export const ICON_OPTIONS = [
  { value: 'truck', label: 'Delivery' },
  { value: 'returns', label: 'Returns' },
  { value: 'cod', label: 'Cash on delivery' },
  { value: 'quality', label: 'Quality' },
  { value: 'support', label: 'Support' },
  { value: 'gift', label: 'Gift' },
  { value: 'package', label: 'Package' },
  { value: 'verified', label: 'Verified' }
];

export interface BenefitItem {
  id: string;
  icon: string;
  title: string;
  text: string;
}

export const DEFAULT_ITEMS: BenefitItem[] = [
  { id: 'b1', icon: 'truck', title: 'Fast delivery', text: 'Across the country' },
  { id: 'b2', icon: 'returns', title: 'Easy returns', text: '7-day size exchange' },
  { id: 'b3', icon: 'cod', title: 'Cash on delivery', text: 'Pay when it arrives' },
  { id: 'b4', icon: 'quality', title: 'Quality assured', text: 'Durable materials' }
];
