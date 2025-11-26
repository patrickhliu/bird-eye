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
                </header>

                { children }

                <footer>
                    <i>my footer...</i>
                </footer>
            </body>
        </html>
    )
}