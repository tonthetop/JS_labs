const PostItem = ({ image, title, description, publishedAt,callback=()=>{} }) => {
 callback(Math.round(Math.random() * 100));
  return (
    <div className="post-item">
      <img src={image} alt={title} />
      <h2 className="post-title">{title}</h2>
      <p className="post-description">{description}</p>
      <p className="post-publishedAt">{publishedAt}</p>
    </div>
  );
};

function App() {
  return (
    <div id="wrapper">
      <PostItem
        title="title1"
        image="url1"
        description="description1"
        publishedAt="description1"
        callback={(random) => {
          console.log(random);
        }}
      />
      <PostItem
        title="title2"
        im3ge="url2"
        description="description2"
        publishedAt="description2"
      />
      <PostItem
        title="title3"
        image="url3"
        description="description3"
        publishedAt="description3"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
