/** Widgets and the page builder are not used: send direct visits to the dashboard. */ export default function redirectToDashboard(_request, response) {
    response.redirect(302, '/admin');
}
