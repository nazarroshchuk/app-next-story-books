function PaginationList({posts}) {
    return (
        <div className="pagination-section">
            <ul className="pagination-section__list">
                {
                    posts && !!posts.length && posts.map(post => (
                        <li key={post.id} className="pagination-section__list__item">
                            <h4>
                                {post.title}
                            </h4>
                            <p>{post.id}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PaginationList