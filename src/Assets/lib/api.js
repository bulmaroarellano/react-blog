const BASE_URL = "https://blog-12g-default-rtdb.firebaseio.com"

export default{
    async getAllPosts(){
        let result = await fetch(`${BASE_URL}/posts/.json`)
        return await result.json() 
    },
    async getPostById( postId ){
        let result = await fetch(`${BASE_URL}/posts/${postId}.json`)
        return await result.json()
    },
    async createPosts( postData ){
        let result = await fetch(`${BASE_URL}/posts/.json`,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( postData )
        })
        return await result.json()
    },
    async deletePostById( postId ){
        let result = await fetch(`${BASE_URL}/posts/${postId}.json`,{
            method:"DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return await result.json()
    },
    async patchPostById( postData, postId ){
        let result = await fetch(`${BASE_URL}/posts/${postId}.json`,{
            method:"PATCH",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( postData )
        })
        return await result.json()
    },

}