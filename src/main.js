import Navigo from "navigo";
import homepage from "./pages/Homepage";
import aboutpage from "./pages/Aboutpage";
import productpage from "./pages/Productpage";
import Header from "./components/header";
import Footer from "./components/footer";
import Aminposts from "./pages/posts";
import Aminaddposts from "./pages/posts/add";
import Amineditposts from "./pages/posts/edit";
import Detailpage from "./pages/detailpage";

const router = new Navigo("/",{linksSelector:"a"});     // biến router được khởi tạo từ navigo: có 2 tham số linkse..a k load lại trang
 //router on duyệt ra tất cả các đường dẫn của chúng ta

 const print =async(content,id)=>{
  document.getElementById("header").innerHTML=Header.render()
  document.getElementById("app").innerHTML= await content.render(id)
  if(content.afterrender) await content.afterrender(id)
  document.getElementById("footer").innerHTML=Footer.render()   // hiển thị ra màn hình
}


// link đến đường dẫn  ddddđ
router.on(      
  {
   "/": ()=>{
     print ( homepage)  // gọi lại hàm print và chuyền tham số 
   },
   "/about": ()=>{
   print(aboutpage)
   },
   "/product": ()=>{
   print(productpage)
   },
   "/amin/post":()=>{
     print(Aminposts)
   },
   "/amin/add/post":()=>{
    print(Aminaddposts)
   },
   "/amin/post/:id/edit":({data})=>{
    print(Amineditposts,data.id)
   }
  //    "/news/:id":({data})=>{
  //     const {id} = data  // detructuring
  // //    console.log(id)
  //   print(Detailpage,render(id))
  
   
  }

)
// kích hoạt router
router.resolve();

