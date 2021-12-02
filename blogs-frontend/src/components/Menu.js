import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import Logout from './Logout'
import { Flex, Stack, Spacer, Box, Heading, Breadcrumb, BreadcrumbItem, Link } from '@chakra-ui/react'

const Menu = () => {
  return (
    <Flex color="white.500" boxShadow="lg">
      <Stack alignItems="center" direction="row" padding={2}>
        <Heading size="md" spacing={3} marginRight={4}>
          Blogs App
        </Heading>
        <Breadcrumb>
          <BreadcrumbItem>
            <Box color="teal.500">
              <Link as={ReactLink} to="/">
                blogs
              </Link>
            </Box>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Box color="teal.500">
              <Link as={ReactLink} to="/users">
                users
              </Link>
            </Box>
          </BreadcrumbItem>
        </Breadcrumb>
      </Stack>
      <Spacer />
      <Stack alignItems="center" direction="row" padding={2} marginRight={2}>
        <Logout />
      </Stack>
    </Flex>
  )
}

export default Menu
