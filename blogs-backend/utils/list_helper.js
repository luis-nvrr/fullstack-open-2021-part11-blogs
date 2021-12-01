const _ = require('lodash')

const dummy = () => 1

const totalLikes = (blogs) =>
  blogs.reduce((a, blog) => a + blog.likes, 0)

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return {}

  let favorite = blogs[0]
  blogs.map((blog) => {
    if (blog.likes > favorite.likes) {
      favorite = blog
    }
    return blog
  })

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes,
  }
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return {}
  }

  const authorWithMostBlogs = _(blogs)
    .groupBy('author')
    .map((value, author) => ({
      author,
      blogs: value.length,
    }))
    .maxBy('blogs')

  return authorWithMostBlogs
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return {}
  }

  const mostLikedAuthor = _(blogs)
    .groupBy('author')
    .map((blogsList, author) => ({
      author,
      likes: _(blogsList).reduce(
        (likes, blog) => likes + blog.likes,
        0,
      ),
    }))
    .maxBy('likes')

  return mostLikedAuthor
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
