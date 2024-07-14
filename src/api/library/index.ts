import { http } from "@/utils/request.ts";

interface UserLikeMusic {
  id: string;
  name: string;
}
/**
 * 用户喜欢音乐
 */
export const userLikeMusic = () => {
  return http.get<UserLikeMusic>("/user/like/music");
};

/**
 * 用户收藏歌单
 */
export const userLikePlaylist = () => {
  return http.get("/user/like/playlist");
};

/**
 * 用户关注歌手
 */
export const userLikeArtist = () => {
  return http.get("/user/like/artist");
};

/**
 * 用户喜欢专辑
 */
export const userLikeAlbum = () => {
  return http.get("/user/like/album");
};

/**
 * 用户收藏mv
 */
export const userLikeMV = () => {
  return http.get("/user/like/mv");
};

/**
 * 用户听歌排行
 */
export const userPlayHistory = () => {
  return http.get("/user/history");
};
