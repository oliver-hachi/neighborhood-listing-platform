export default function Home() {
	const features = [
		{
			title: "Listings",
			description:
				"Discover local listings, services, resources, and opportunities available in your neighborhood.",
		},
		{
			title: "Neighborhood Sponsors",
			description:
				"Connect with local businesses and organizations that support and contribute to the neighborhood.",
		},
		{
			title: "Voice Help",
			description:
				"Get helpful information and assistance through voice-based support.",
		},
	];

	return (
		<main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900">
			<section className="mx-auto max-w-5xl">
				<header className="text-center">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
						Neighborhood Listing Platform
					</h1>

					<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
						A community-focused platform that helps residents discover local
						listings, neighborhood sponsors, and helpful resources.
					</p>
				</header>

				<section aria-labelledby="features-heading" className="mt-12">
					<h2 id="features-heading" className="sr-only">
						Platform Features
					</h2>

					<div className="grid gap-6 md:grid-cols-3">
						{features.map((feature) => (
							<article
								key={feature.title}
								className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
							>
								<h3 className="text-xl font-semibold">{feature.title}</h3>

								<p className="mt-3 leading-7 text-zinc-600">
									{feature.description}
								</p>
							</article>
						))}
					</div>
				</section>
			</section>
		</main>
	);
}
