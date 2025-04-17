<script setup>
import { useProductsStore } from '../stores/productsStore.js'

const store = useProductsStore()

const onToggleUserItem = (item) => {
  store.toggleUserItem(item)
}

const onToggleRightItem = (item) => {
  store.toggleRightItem(item)
}

const clearSelections = () => {
  store.clearAllSelections()
}
</script>

<template>
		<section class="products">
				<div class="products__title-page">
						<h1>Выбор вещей</h1>
				</div>

				<div class="products__selections">
						<div class="products__user-selected-group">
								<h3 class="products__title">Выбранные вещи (1–6):</h3>
								<div class="products__user-selected-list">
          <span
				          v-for="item in store.selectedUserItems"
				          :key="item.id"
				          class="products__user-selected-item"
          >
            {{ item.name }}
          </span>
										<div
														v-if="!store.selectedUserItems.length"
														class="products__empty"
										>
												Не выбрано ни одной вещи
										</div>
								</div>
						</div>

						<div class="products__right-selected-group">
								<h3 class="products__title">Выбранная вещь:</h3>
								<div
												v-if="store.selectedRightItem"
												class="products__right-selected-item"
								>
										{{ store.selectedRightItem.name }}
								</div>
								<div
												v-else
												class="products__empty"
								>
										Вещь не выбрана
								</div>
						</div>
				</div>

				<div class="products__available">
						<div class="products__user-items">
								<h3 class="products__title">Ваши вещи</h3>
								<div class="products__grid">
										<button
														v-for="item in store.userItems"
														:key="item.id"
														class="products__item"
														:class="{
              'products__item--selected': store.isUserItemSelected(item),
              'products__item--disabled':
                !store.isUserItemSelected(item) && store.selectedUserItems.length >= 6
            }"
														@click="onToggleUserItem(item)"
										>
												{{ item.name }}
										</button>
								</div>
						</div>

						<div class="products__right-items">
								<h3 class="products__title">Доступные вещи</h3>
								<div class="products__grid">
										<button
														v-for="item in store.rightItems"
														:key="item.id"
														class="products__item"
														:class="{
              'products__item--selected': store.isRightItemSelected(item)
            }"
														@click="onToggleRightItem(item)"
										>
												{{ item.name }}
										</button>
								</div>
						</div>
				</div>

				<button class="products__clear" @click="clearSelections">
						Очистить выбор
				</button>
		</section>
</template>