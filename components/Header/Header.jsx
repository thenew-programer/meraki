import Link from 'next/link';

export default function Header() {
	return (
		<header className="p-4 bg-brand-800 text-white">
			<h1 className="text-2xl font-bold">Mamounia</h1>
			<nav>
				<ul className="flex space-x-4">
					<li><Link href="/">Home</Link></li>
					<li><Link href="/about">About</Link></li>
					<li><Link href="/reservation">Reservation</Link></li>
					<li><Link href="/prices">Prices</Link></li>
				</ul>
			</nav>
		</header>
	);
}
