function BlogCard({ image, category, title, excerpt, readTime }) {
  return (
    <div className="blog-card">
      <div className="blog-card-media">
        <img src={image} alt={title} />
        <span className="blog-card-tag">{category}</span>
      </div>
      <div className="blog-card-body">
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <div className="blog-card-footer">
          <span className="blog-card-readtime">{readTime}</span>
          <a href="#" className="workout-card-link">
            Read more →
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard