<script setup>
import axios from "axios"
import { ref } from 'vue'

const postitem = ref([])

async function postList() {
    let url = "https://basic-blog.teamrabbil.com/api/post-list/2"
    let res = await axios.get(url)
    postitem.value = res.data
}

postList()
</script>


<template>
    <section class="content mt-5 d-flex justify-content-center align-items-center">
        <div class="container-fluid">
            <div class="card card-default m-2 mx-auto" style="max-width: calc(100% - 200px);">
                <div class="card-body bg-light">
                    <!-- Loop through the post items -->
                    <div class="container">
                        
                        <div class="row mt-2">
                            <div class="col-md-12" v-for="post in postitem" :key="post.id">
                                
                                <img class="mt-3" :src="post['img']" alt="Post Image" style="width:100%"/>
                                <div class="mt-3">
                                    <b class="mt-5 text-2xl">{{ post['title'] }}</b>
                                    <p>{{ post['short'] }}</p>

                                </div>
                                

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
