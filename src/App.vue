<template>
    <router-view></router-view> 
</template>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
	watch: {
		'$route' (to, from) {
			document.title = to.meta.title || 'Other Title'
		}
	}
};
</script>
