import { mockInstance } from 'api/config';

export type ProfilePostType = {
  id: string;
  post: string;
};

export const POSTS = {
  getPosts() {
    return mockInstance.get<ProfilePostType[]>('posts');
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
