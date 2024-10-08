import Link from "next/link";

export function SiteHeader() {
    return (
        <header style={{ display: 'flex', gap: 8 }}>
            <b>Cerberus</b>
            <Link href="/dashboard">
                Dashboard
            </Link>
            <Link href="/users">
                Users
            </Link>
            <Link href="/media">
                Media
            </Link>
            <Link href="/schemas">
                Schemas
            </Link>
            <Link href="/content">
                Content
            </Link>
        </header>
    )
}