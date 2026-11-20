/** Static customer reviews. Replace with real ones. */
export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  title: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Aarav S.',
    city: 'Mumbai',
    rating: 5,
    title: 'Comfortable from day one',
    text: 'No break-in period at all. I wore them for a full day of walking and my feet felt fine.'
  },
  {
    id: 'r2',
    name: 'Priya M.',
    city: 'Bengaluru',
    rating: 5,
    title: 'Exactly as shown',
    text: 'The colour and finish match the photos. Size guide was accurate, and delivery took three days.'
  },
  {
    id: 'r3',
    name: 'Rohan K.',
    city: 'Delhi',
    rating: 4,
    title: 'Good value',
    text: 'Solid sole and clean stitching for the price. Exchanged one size for free without any fuss.'
  }
];
