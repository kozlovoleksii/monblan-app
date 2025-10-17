import './PostCard.css';
import love from "../../assets/icons/love.svg"
import comments from '../../assets/icons/comments.svg';

export const PostCard = ({ post, view }) => {
  return (
    <article className={`post ${view === 'list' ? 'post--list' : 'post--grid'}`}>
      <img src={post.img} alt="Post" className="post__img" />
      <div className="post__content">
        <div className="post__content-dates">
          <div className="post__info">
            <p className="post__label">Today</p>

            <div className="post__stats">
              <div className="post__stats-icons">
                <img src={love} alt="likes" className="post__icon" />
                <span>{post.todayLikes}</span>
              </div>
              <div className="post__stats-icons">
                <img src={comments} alt="comments" className="post__icon" />
                <span> {post.todayComments}</span>
              </div>
            </div>
          </div>
          <div className="post__date-block">
            <p className="post__date">{post.date}</p>
            <div className="post__stats">
              <div className="post__stats-icons">
                <img src={love} alt="likes" className="post__icon" />
                <span> {post.dateLikes}</span>
              </div>
              <div className="post__stats-icons">
                <img src={comments} alt="comments" className="post__icon" />
                <span> {post.dateComments}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="post__upload-block">
          <p className="post__upload-title">Image upload</p>
          <p className="post__upload-date">{post.uploadDate}</p>
        </div>
      </div>
    </article>
  );
};
