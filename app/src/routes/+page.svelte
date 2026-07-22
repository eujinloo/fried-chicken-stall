<script lang="ts">
	const menu = [
		{ name: 'Original Fried Chicken (2pc)', price: 'RM 8.00', desc: 'Crispy golden fried chicken, classic recipe' },
		{ name: 'Spicy Fried Chicken (2pc)', price: 'RM 8.50', desc: 'Same crispy chicken, chilli-spiced coating' },
		{ name: 'Chicken + Rice Set', price: 'RM 10.00', desc: '1pc chicken with rice and gravy' },
		{ name: 'Wings (5pc)', price: 'RM 9.00', desc: 'Crispy fried chicken wings' },
		{ name: 'Add-on: Rice', price: 'RM 1.50', desc: '' },
		{ name: 'Add-on: Drink', price: 'RM 2.00', desc: 'Ask for available flavours' }
	];
</script>

<svelte:head>
	<title>Fried Chicken Stall</title>
</svelte:head>

<main>
	<header>
		<h1>🍗 Fried Chicken Stall</h1>
		<p class="tagline">Fresh, crispy, roadside.</p>
	</header>

	<section class="menu">
		<h2>Menu</h2>
		<ul>
			{#each menu as item}
				<li>
					<div class="item-row">
						<span class="item-name">{item.name}</span>
						<span class="item-price">{item.price}</span>
					</div>
					{#if item.desc}
						<p class="item-desc">{item.desc}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</section>

	<section class="payment">
		<h2>Payment</h2>
		<p class="cashless-note">Cashless only — scan to pay via DuitNow QR</p>
		<div class="qr-placeholder">
			<span>QR CODE<br />(add real DuitNow QR here)</span>
		</div>
	</section>

	<footer>
		<p>Open daily · roadside stall</p>
	</footer>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
		background: #fffaf5;
		color: #2b1c12;
	}

	main {
		max-width: 480px;
		margin: 0 auto;
		padding: 1.5rem 1.25rem 3rem;
	}

	header {
		text-align: center;
		margin-bottom: 2rem;
	}

	h1 {
		font-size: 1.75rem;
		margin: 0 0 0.25rem;
	}

	.tagline {
		margin: 0;
		color: #7a5c42;
		font-size: 0.95rem;
	}

	h2 {
		font-size: 1.1rem;
		border-bottom: 2px solid #e8935a;
		padding-bottom: 0.4rem;
		margin-bottom: 1rem;
	}

	.menu ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.menu li {
		padding: 0.75rem 0;
		border-bottom: 1px solid #f0e0d0;
	}

	.item-row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
		font-weight: 600;
	}

	.item-price {
		white-space: nowrap;
		color: #b5522a;
	}

	.item-desc {
		margin: 0.25rem 0 0;
		color: #7a5c42;
		font-size: 0.85rem;
	}

	.payment {
		margin-top: 2.5rem;
		text-align: center;
	}

	.cashless-note {
		color: #7a5c42;
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}

	.qr-placeholder {
		width: 200px;
		height: 200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px dashed #d9a679;
		border-radius: 8px;
		background: #fff2e6;
		color: #b5522a;
		font-size: 0.85rem;
		text-align: center;
		line-height: 1.4;
	}

	footer {
		margin-top: 3rem;
		text-align: center;
		color: #a88;
		font-size: 0.8rem;
	}
</style>
