import './global.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        // children is the app/page.tsx component...
        <html lang="en">
            <body>
                <header>
                    <i>my header...</i>
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossOrigin="anonymous"></script>
                </header>

                { children }

                <footer>
                    <i>my footer...</i>
                </footer>
            </body>
        </html>
    )
}