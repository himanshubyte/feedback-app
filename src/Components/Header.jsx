const Header=({text})=>{
return (
   <header style={{backgroundColor:'blueviolet',color:"whitesmoke" , fontFamily:"cursive"}}>
       <div className="container">
           <h2>{text}</h2>
       </div>
   </header>
)
}

Header.defaultProps={
    text:"FeedBack UI"
}

export default Header;