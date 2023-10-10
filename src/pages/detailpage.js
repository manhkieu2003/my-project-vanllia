//   import data from "../data"
 const Detailpage ={
    render(id)
  {
      //  const found = data.find((element)=>element.id===id)
        // console.log(found) 
        return `
         <div class="max-w-5xl mx-auto">
            <h1>${found.title}</h1>
            <img src="${found.img}" alt="">
           <p>${found.desc}</p>
        <div/>        `
    }
}
 export default Detailpage