const App = () => {
//variables and funnctions above return()

const title="Blog Post"
const body="This is my blog post"

const comments=[
  {id:1, text:'Comment one'},
  {id:2, text:'Comment two'},
  {id:3, text:'Comment three'}
]

const showComments=true;

const CommentBlock=(
<div className="container">


<div className="comments">
  <h4>Comments({comments.length })</h4>
  <ul>
  {comments.map((comment,index)=>(
      <li key={index} >{comment.text}</li>
  ))}
  </ul>
</div>
</div>
)
//map returns jsx 
//!comment.map(()=>())

  return (
    <div className="main">
          <h1>{title.toUpperCase()}</h1>
          <p>{body}</p>
   {showComments && CommentBlock}
    </div>

  );
};

export default App;
