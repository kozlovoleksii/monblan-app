import './PostList.css';
import { posts } from '../../data/posts';
import { PostCard } from '../PostCard/PostCard';
import grid from '../../assets/icons/grid.svg';
import list from '../../assets/icons/list.svg';

export const PostList = ({ view, setView }) => {
  return (
    <section className="posts">
      <div className="layout__controls">
        <button
          className={`${view === 'grid' ? 'layout__btn active' : 'layout__btn'}`}
          onClick={() => setView('grid')}
          title="Grid view"
        >
          <img src={grid} alt="Grid view" />
        </button>

        <button
          className={`layout__btn ${view === 'list' ? 'active' : ''}`}
          onClick={() => setView('list')}
          title="List view"
        >
          <img src={list} alt="List view" />
        </button>
      </div>
      <div
        className={`posts__list ${view === 'list' ? 'posts__list--list' : 'posts__list--grid'}`}
      >
        {posts.map((post) => (
          <PostCard key={post.id} post={post} view={view} />
        ))}
      </div>
      <button className="posts__load">Load more</button>
    </section>
  );
};
