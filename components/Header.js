import Link from "next/link"

export default function Header() {
	return (
		<header>
			<div className="container mt-12">
				<header className="pt-4 pl-4">
					<h1 className="font-rubik text-7xl text-left">
						actual
					</h1>
					<h1 className="font-rubik text-7xl text-left">
						expected
					</h1>
				</header>
				<nav className="pl-2">
					<ul className="list-style-type: none flex">
						<li className="m-4">
							<Link href="/"><a className="font-dosis">Nav Item One</a></Link>
						</li>
						<li className="m-4">
							<Link href="/"><a className="font-dosis">Nav Item Two</a></Link>
						</li>
						<li className="m-4">
							<Link href="/"><a className="font-dosis">Nave Item Three</a></Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}