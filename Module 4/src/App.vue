<script>
import { ref, reactive } from 'vue'

export default{

  setup(){
    const currentIndex = ref(0);
    const rightArrow="https://cdn-icons-png.flaticon.com/512/6364/6364375.png"
    const leftArrow="https://cdn-icons-png.flaticon.com/512/4028/4028550.png"
    const fullImage = ref('https://www.playstationlifestyle.net/wp-content/uploads/sites/9/2023/07/sony-playstation-5.jpg?w=1200')

    const images = reactive([
      {
        thumb: "https://www.playstationlifestyle.net/wp-content/uploads/sites/9/2023/07/sony-playstation-5.jpg?w=1200",
        full: "https://www.playstationlifestyle.net/wp-content/uploads/sites/9/2023/07/sony-playstation-5.jpg?w=1200"
      },
      
      {
        thumb: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-1024x768.jpg",
        full: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-1024x768.jpg"
      },
      
      {
        thumb: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHM1fGVufDB8fDB8fHww&w=1000&q=80",
        full: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHM1fGVufDB8fDB8fHww&w=1000&q=80"
      },
      
      {
        thumb: "https://cdn.mos.cms.futurecdn.net/odW5TWbE7mrbWSSB2RAJiV-1200-80.jpg",
        full: "https://cdn.mos.cms.futurecdn.net/odW5TWbE7mrbWSSB2RAJiV-1200-80.jpg"
      }
    ])

    const setImage=(image)=>
    {
        fullImage.value=image.full
    }

    const changeImage=(step)=> {
      currentIndex.value = (currentIndex.value + step + images.length) % images.length;
      fullImage.value = images[currentIndex.value].full;
    }

    return {currentIndex,rightArrow,leftArrow,images, setImage, changeImage, fullImage}
  }
  
}








</script>


<template>
 
 <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-center text-2xl py-10">Image Carousel</h1>
    <div class="relative">
        <img class="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 w-8 h-8" :src="leftArrow" @click="changeImage(-1)" alt="Left Arrow">

        <div class="relative">
            <img class="cursor-pointer w-full rounded-xl" :src="fullImage">
        </div>

        <img class="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 w-8 h-8" :src="rightArrow" @click="changeImage(1)" alt="Right Arrow">
    </div>
    <div class="flex space-x-2 mt-10">
        <img @click="setImage(image)" class="cursor-pointer rounded-xl w-20 h-20" v-for="image in images" :src="image.thumb">
    </div>
</section>

</template>


<style scoped>

</style>