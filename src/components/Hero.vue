<template>
		<section class="bg-primary hero">
				<div class="container hero__container">
						<div class="align-c hero__wrapper">
								<h2 class="c-white hero__headline">{{ headline }}</h2>
								<p class="c-white hero__description">{{ description }}</p>
						</div>
				</div>
		</section>
</template>

<script>
		export default {
				data() {
						return {
								headline: 'Fullstack Web Developer',
								description: 'Vietnamese GTE of WordPress Polygots. Technical Lead @solislab'
						}
				}
		}
</script>

<style lang="postcss">
		.hero {
				padding: 20px 0;

				@media (--m) {
						padding: 40px 0;
				}

				@media (--l) {
						padding: 60px 0;
				}
		}

		.hero__headline {
				margin-top: 0;
				margin-bottom: 0.25em;
				font-size: 3rem;
		}

		.hero__description {
				font-size: 1.25rem;
		}
</style>
