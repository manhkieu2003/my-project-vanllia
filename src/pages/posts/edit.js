// trang này là để sửa dữ liệu
import Banner from "../../components/banner"
import axios from "axios"
const Amineditposts =
{
 async render(id)
 {
   const reponse =await axios.get(`http://localhost:3000/posts/${id}`)
     console.log(reponse.data)
   return `
   <div class="max-w-5xl mx-auto">
      <div class="banner">
         ${Banner.render()}
      </div>
      <div class ="news">
        <form id="formeditpost">
             <input type="text" class="border border-black" id="title-post" placeholder="Title post" value="${reponse.data.title}" /><br/>
             <img src="${reponse.data.img}"/>
             <input type="file" class="border border-black" id="img-post"  /><br/>
             <textarea name=""  class="border border-black" id="desc-post" cols="30" rows="10" >${reponse.data.desc}</textarea><br/>
            
            <button class="btn bg-blue-500 text-white inline-block py-5 px-4">Add post</button>
            
        </form
      </div>
   </div>
   `
  
 },
 afterrender(id)
 {
   const formeditposts = document.querySelector("#formeditpost")
    // console.log(formeditposts)
  const CLOUDINARY_PRESET ="manhkieu"  // tên
  const CLOUDINARY_API_URL ="https://api.cloudinary.com/v1_1/drnzyiahq/image/upload"
  formeditposts.addEventListener('submit',async function(e)
  {
    e.preventDefault();  // nếu k có sẽ bị reload lại trang
    // console.log('1')
    //  var result = document.querySelector('#title-post').value
    //  console.log(result)
     const file =document.querySelector("#img-post").files[0] // muốn lấy file ảnh phải lấy qua thuộc tính files của nó 
     // gắn vào objetc form data 
     var formdate = new FormData()
     formdate.append('file',file)
     formdate.append('upload_preset',CLOUDINARY_PRESET)
     

     // call api cloudinary để upload ảnh lên
   const reponses= await axios.post(CLOUDINARY_API_URL,formdate,{
        headers:{
            "Content-Type":"application/form-data"
        }
     })
     console.log(reponses.data.url)  // trả về 1 link online
     // await chờ tải xong gán vào biến reponse
     axios.put(`http://localhost:3000/posts/${id}`,{
        title:document.querySelector('#title-post').value,
        img:reponses.data.url,
        desc :document.querySelector('#desc-post').value
     })
     // chuyển trang
     document.location.href ='/amin/post'
   })

 }
}
export default Amineditposts