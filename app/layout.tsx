export const metadata = {
  title: 'Citizen Voice India',
  description: 'Citizen Voice India Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
