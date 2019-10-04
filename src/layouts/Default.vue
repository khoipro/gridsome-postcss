<template>
		<div class="layout">
				<header class="header">
						<div class="container header__container">
								<div class="header__wrapper">
										<h1 class="header__title">
												<g-link class="header__title-link" to="/">{{ $static.metadata.siteName }}</g-link>
										</h1>
										<nav class="header__nav">
												<g-link class="header__nav-link" to="/">Home</g-link>
												<g-link class="header__nav-link" to="/about/">About</g-link>
										</nav>
								</div>
						</div>
				</header>
				<slot/>
		</div>
</template>

<static-query>
		query {
		metadata {
		siteName
		}
		}
</static-query>

<style lang="postcss" scoped>
		/* defer:start */
		.header {
				padding: 10px 0;
		}

		.header__wrapper {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
		}

		.header__title {
				margin: 0;
				flex: 1 1 0;
				padding-right: 20px;
		}

		.header__title-link {
				color: var(--primary);
		}

		.header__nav-link {
				display: inline-block;
				margin-left: 20px;

				&.active--exact {
						position: relative;
						color: var(--primary);
				}
		}

		.header__nav-link.active--exact:before {
				content: '';
				position: absolute;
				top: 100%;
				left: 0;
				width: 100%;
				height: 2px;
				background: var(--primary);
		}

		/* defer:end */
</style>
