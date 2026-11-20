import type { Request, Response } from 'express';

/** Widgets and the page builder are not used: send direct visits to the dashboard. */
export default function redirectToDashboard(_request: Request, response: Response) {
  response.redirect(302, '/admin');
}
