import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="">
                <ToastContainer />
                {children}
            </body>
        </html>
    )
}
