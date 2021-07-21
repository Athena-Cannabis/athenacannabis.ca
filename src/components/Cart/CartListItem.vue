<template>
  <div
    class="
      py-10
      border-b border-gray-200
      grid grid-cols-12 gap-2">

    <!-- Product information panel -->
    <div class="col-span-6">

      <div class="flex flex-row flex-nowrap">

        <!-- Right side with product image -->
        <div class="w-1/4">

          <!-- Product image -->
          <img
            :src="product.images[0].src"
            :alt="product.images[0].alt"
            class="h-auto sm:h-20 object-contain" />

        </div>
        <!-- Left side with product information -->
        <div class="w-3/4">

          <dl>
            <dt class="sr-only">
              Product title:
            </dt>
            <dd class="text-base font-medium mb-3">

               <router-link
                class="text-brand-blue-700 underline"
                :to="{ name: 'product', params: { slug: product.slug }}">
                {{ product.title }}
              </router-link>

            </dd>
            <div class="flex flex-row text-sm">
            <dt class="">
              Brand:
            </dt>
            <dd class="ml-1">
              {{ product.brand }}
            </dd>
            </div>
            <dt class="sr-only">
              Product weight
            </dt>
            <dd class="text-sm">
              {{ product.cannabis.weight }}
            </dd>
            <dt class="sr-only">
              Product sku:
            </dt>
            <dd class="text-xs">
              {{ product.sku }}
            </dd>
          </dl>

          <!-- Remove button -->
          <div class="mt-4">
            <button
              v-on:click="handleRemoveFromCart"
              class="
                px-2 py-1
                flex items-center border border-gray-300 bg-gray-100 rounded-3xl text-gray-700
                ">
              <svg class="h-4 w-4 text-blue-900 fill-current" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><g><g i:extraneous="self"><g><path d="M86.9,11H61.4V5.3c0-1.6-1.3-2.8-2.8-2.8h-17c-1.6,0-2.8,1.3-2.8,2.8V11H13.1c-1.6,0-2.8,1.3-2.8,2.8v5.7     c0,1.6,1.3,2.8,2.8,2.8h73.8c1.6,0,2.8-1.3,2.8-2.8v-5.7C89.7,12.3,88.5,11,86.9,11z"></path><path d="M82.4,29.4H17.6c-0.9,0-1.5,0.8-1.4,1.6L23.5,90c0.5,4.3,4.2,7.5,8.5,7.5H68c4.3,0,7.9-3.2,8.5-7.5L83.9,31     C84,30.1,83.3,29.4,82.4,29.4z M62.7,70c1.3,1.3,1.3,3.5,0,4.8c-0.7,0.7-1.5,1-2.4,1s-1.7-0.3-2.4-1L50,66.9l-7.9,7.9     c-0.7,0.7-1.5,1-2.4,1s-1.7-0.3-2.4-1c-1.3-1.3-1.3-3.5,0-4.8l7.9-7.9l-7.9-7.9c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0     l7.9,7.9l7.9-7.9c1.3-1.3,3.5-1.3,4.8,0c1.3,1.3,1.3,3.5,0,4.8l-7.9,7.9L62.7,70z"></path></g></g></g></svg>
              <span
                class="text-xs ml-1">
                Remove
              </span>
              <span class="sr-only">this item from the cart</span>
            </button>
          </div>



        </div>

      </div>

    </div>

    <!-- Price -->
    <div class="col-span-2">
      $&nbsp;{{ product.price.current }}
    </div>

    <!-- Quantity -->
    <div class="col-span-2 self-center place-self-center">

      <div
        class="
          my-10
          bg-red-100 border border-white
          rounded-3xl
          shadow-2xl
          flex flex-row
          w-20
        ">
        <div>
          -
        </div>
        <div>
          0
        </div>
        <div>
          +
        </div>
      </div>

    </div>

    <!-- Total -->
    <div class="col-span-2">
      <div class="text-right">
        $&nbsp;{{ total }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    productId: {
      type: Number,
      required: true
    }
  },
  setup(props) {


    const store = useStore();

    const product = computed(() => store.getters['product/getProductByProductId'](props.productId));

    const total = computed(() => store.getters['cart/getCartItemTotalByProductId'](props.productId));

    function handleRemoveFromCart(e) {

      store.dispatch('cart/deleteFromCart', props.productId );

      // Remove the focus ring that the browser puts on it after a button click
      e.target.blur();

    }

    return {
      product,
      total,
      handleRemoveFromCart,
    }

  },
}
</script>
