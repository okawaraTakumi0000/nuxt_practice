<template>
    <div>記事だよー</div>
</template>

<script setup>

const {data} = await useFetch('https://qiita.com/api/v2/items',{method:'GET',headers:{authorization: }})
console.log(data.value)

</script>