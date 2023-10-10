  // chức năng này là index và xóa 
 import Banner from "../../components/banner"
 import axios from "axios"
const Aminposts =
{
  async render()
  {
    const reponse =await axios.get("http://localhost:3000/posts")
     console.log(reponse)
    return `
    <div class="max-w-5xl mx-auto">
       <div class="banner">
          ${Banner.render()}
       </div>
       <div class ="news">
         <table>
            <thead>
                 <th>STT</th>
                 <th>ảnh</th>
                 <th>Tiêu đề</th>
                 <th></th>
            <thead>
            <tbody>

            ${reponse.data.map((post,index) =>`
               
            <tr class="border p-3 ">
                  <td>${index + 1}</td>
               <td href="">
                 <img src="${post.img}" alt="" width="50">
                </td>
                <td>
                <h3><a href="/news/${post.id}">${post.title}</a></h3>
                <td>
               
                 <td>
                    <a href="/amin/post/${post.id}/edit">Edit<a/>
                    <button data-id="${post.id}" class="btn bg-red-500 text-white inline-block py-5 px-4">Delete</button
                 </td>
                 
            </tr>
           `
                
            ).join("")}
            <tbody>
         </table>
       </div>
    </div>
    `
   
  },
  afterrender()
  {
       console.log("afterrender")
       // lấy danh sách button
       const btns = document.querySelectorAll(".btn") // truy cập đến tất cả các classtbn
       console.log(btns)  // trả ra 1 nodelist
       // tạo vòng lặp
       btns.forEach(btn =>{
        // viết sự kiện click vào button call api và xóa sản phẩm
        console.log(btn.dataset.id)  // truy cập vào và lấy ra data-id
        const id = btn.dataset.id
        btn.addEventListener('click',function()
        {
            console.log(id)
            // hàm confirm xem có muốn xóa hay k
            const confirms = window.confirm("bạn có chắc chắn muốn xóa")
            if(confirms)
            {

                axios.delete(`http://localhost:3000/posts/${id}`) // tiếp theo call api và xóa sản phẩm
            }
            else{

            }
        })
        
      // document.location.href ="/amin/post"
        
       })
    
  }
}
export default Aminposts