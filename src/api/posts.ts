import { mockInstance } from 'api/config';
import { HomePostType } from 'types/homeTypes';

export const POSTS = {
  getPosts(postsPerPage: number) {
    return mockInstance.get<HomePostType[]>(
      `posts?sortBy=postID&order=desc&page=1&limit=${postsPerPage}`,
    );
  },
  addPost(newPost: string, postID: number) {
    return mockInstance.post('posts', {
      post: newPost,
      postID,
    });
  },
  deletePost(id: string) {
    return mockInstance.delete(`posts/${id}`);
  },
  editPost(editText: string, id: string) {
    return mockInstance.put(`posts/${id}`, {
      post: editText,
    });
  },
};
