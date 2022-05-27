import { mockInstance } from 'api/config';
import { HomePostType } from 'types/homeTypes';

export const POSTS = {
  getPosts() {
    return mockInstance.get<HomePostType[]>('posts');
  },
  addPost(newPost: string) {
    return mockInstance.post('posts', {
      post: newPost,
    });
  },
  deletePost(id: string) {
    return mockInstance.delete(`posts/${id}`);
  },
};
