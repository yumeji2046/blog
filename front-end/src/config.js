export const API_ROOT = (process.env.NODE_ENV === 'production')
  ? 'https://bird.ioliu.cn/v1/?url=http://nickj.leanapp.cn/'
  : '/' // 已加跨域代理头，注意仅支持GET请求
