import Banner from "../components/banner";
import Newlisst from "../components/new-list";
const aboutpage ={
  async render() {
    return /* html */`
  <div class="max-w-5xl ">
   <div class="banner ">
      ${Banner.render()} 
   </div>

   <div class ="news">
     ${await Newlisst.render()}
   </div>
</div>
  `
}
  }
  export default aboutpage;
  // đã thay đổi 