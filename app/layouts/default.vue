<template>
	<q-layout view="lHh Lpr lFf">
		<q-header>
			<q-toolbar>
				<q-btn
					dense
					flat
					icon="menu"
					round
					@click="toggleLeftDrawer"
				/>

				<q-toolbar-title>Cloud</q-toolbar-title>
			</q-toolbar>
		</q-header>

		<q-drawer
			v-model="leftDrawerOpen"
			bordered
			show-if-above
		>
			<q-list>
				<q-item-label header>Garten Automation</q-item-label>
				<q-item clickable>
					<q-item-section avatar>
						<q-icon name="business" />
					</q-item-section>
					<q-item-section>
						<q-item-label>Home</q-item-label>
						<q-item-label caption>Accessible companies</q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</q-drawer>

		<q-page-container>
			<NuxtPage />
		</q-page-container>
	</q-layout>
</template>

<script setup lang="ts">
	const leftDrawerOpen = ref(false)
	function toggleLeftDrawer() {
		leftDrawerOpen.value = !leftDrawerOpen.value
	}
</script>
