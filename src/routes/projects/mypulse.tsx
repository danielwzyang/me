import Container from "../../components/Container"

export default function MyPulse() {
    return <Container>
        <h1 class="text-3xl serif mb-3">MyPulse</h1>
        <img src="/projects/mypulse/cover.png" alt="mypulse" class="mb-5 rounded-lg" />
        <div class="flex flex-col gap-3">
            <p>
                The year that I joined StuyPulse, one of our mentors, Kevin, built an 
                <a href="https://github.com/kevinwang/attendance-kiosk">attendance kiosk </a>
                where members scan in and out everyday. You swipe your student ID on a barcode scanner that reads your 9-digit 
                student ID number. The kiosk then stores some data about your checkins and checkouts, total hours spent, and other 
                general statistics about attendance.
            </p>

            <p>
                Our head coach wanted these statistics to help filter out who gets to go to competition. Typically, a lot of people
                sign up to go and there are a limited number of seats, so there had to be some way to pick fairly. The kiosk was a
                great solution for that, except for the fact that members didn't know their own statistics. To fix this issue, I
                created MyPulse.
            </p>

            <h1 class="text-2xl serif mt-3">User Experience</h1>

            <p>
                To use MyPulse, users will register with their OSIS and create a password. Their OSIS will be validated using the
                database before registration is confirmed. They can then login with these credentials and view their statistics.
                The date range of these statistics will either be from the start of the build season or the start of the school year,
                depending on the time of year it is. Users can also view the calendar, which keeps track of every meeting that's
                happened since September 1 of 2024. Red days represent absence, orange days represent that they attended but they
                forgot to swipe out, and green represents attendance with swiping out. They can also view whether they handed in
                certain forms, e.g. safety tests and team dues.
            </p>

            <p>
                There is also an admin account that allows admins to view any student's statistics and overall meeting statistics.
                This is used by our head coach to guage general attendance and to look at a specific student's attendance if needed.
            </p>

            <img src="/projects/mypulse/admin.png" alt="admin dashboard" class="mb-5 rounded-lg" />

            <h1 class="text-2xl serif">Infrastructure</h1>

            <p>
                MyPulse is built using Astro with vanilla HTML, Typescript, and TailwindCSS. It's hosted on Vercel and the database
                runs on Supabase. I decided to use Supabase for the backend because the setup was relatively simple and
                authentication was already built in. All of the data that MyPulse uses comes from Kevin's attendance kiosk.
            </p>

            <p>
                The way MyPulse gets data from the kiosk is through an hourly POST request to an endpoint at MyPulse. At the start of 
                every hour, the kiosk will send a request with a key and three files: the meetings report, attendance report, and 
                checkins report. The key is a unique string that MyPulse uses to confirm that the request is coming from the kiosk. 
                The meetings report has a list of every meeting and its statistics, the attendance report has a list of every user 
                and their attendance statistics, and the checkins report has a list of every user for each day with checkin and 
                checkout timestamps. These three attached files will get processed and the data will be used to update the database.
            </p>
        </div>
    </Container>
}