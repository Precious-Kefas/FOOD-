//this is a function component
//to paass your props here as a parameter caleed props pass it to ( )then ause it in the function body
//props witn functional component
//there is one rule as props are immutabel which means the cannot be chagesd eg we cannot say props.name= "mark" to do tis we need state
 let House = (props) => {
   console.log(props);

   
     return (
       <div>
         <h1>
           Hello {props.name} a.k.a {props.heroName}
         </h1>
         {props.children}
       </div>
     );
 };
export default House;
