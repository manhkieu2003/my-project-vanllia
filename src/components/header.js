const Header ={
    render()
    {
        // /*html*/ : tự động higtlight các thẻ html
        return /*html*/ ` 
        <nav class="max-w-5xl mx-auto bg-orange-500"> 
          <ul class="flex">
              <li> <a href="/" class="block px-4 py-3 hover:bg-green-500 hover:text-white">Homepage</a></li>
               <li><a href="/about"class="block px-4 py-3 hover:bg-green-500 hover:text-white">Aboutpage</a></li>
              <li> <a href="/product"class="block px-4 py-3 hover:bg-green-500 hover:text-white">Productpage</a></li>
           </ul>
        </nav>
        `
    }
}
export default Header