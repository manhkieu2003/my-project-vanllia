 // tách ra từ trang homepage class news
 // lấy dữ liệu từ trang data
 import axios from "axios"
  // import data from "../data"
const Newlisst = {
   async render()
    
    {
      const reponse =await axios.get("http://localhost:3000/posts")
      console.log(reponse.data)
        return `
        <h2>Tin tức học tập</h2>
    <div class="grid grid-cols-3 gap-8">
       ${reponse.data.map(post =>`
        <div class="border p-3">
           <a href="/news/${post.id}">
             <img src="${post.img}" alt="">
            </a>
           <h3><a href="/news/${post.id}">${post.title}</a></h3>
           <p>${post.desc}</p>
        </div>
       `
        ).join("")}

    </div>
     
        `
    }
}
export default Newlisst