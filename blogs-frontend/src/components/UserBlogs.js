import React from 'react'
import { Navigate, Link as ReactLink } from 'react-router-dom'
import { ListItem, ListIcon, List, Alert, AlertIcon, Stack, Heading, Link } from '@chakra-ui/react'
import { BiNote } from 'react-icons/bi'
import { useSelector } from 'react-redux'

const UserBlogs = ({ user }) => {
  if (!user) {
    return <Navigate to="/users" />
  }

  const blogs = useSelector((state) => state.blogs)
  const userBlogs = blogs.filter((b) => b.user.id === user.id)

  if (!userBlogs) {
    return (
      <Alert status="info">
        <AlertIcon />
        There are no blogs here
      </Alert>
    )
  }

  return (
    <Stack>
      <Heading size="lg">Added blogs</Heading>
      <List>
        {userBlogs.map((blog) => (
          <ListItem key={blog.id}>
            <ListIcon as={BiNote} color="green.500" />
            <Link as={ReactLink} to={`/blogs/${blog.id}`}>
              {blog.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}

export default UserBlogs
