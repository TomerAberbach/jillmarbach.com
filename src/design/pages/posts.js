import React, { useEffect, useState } from 'react'
import {
  AllSubstringsIndexStrategy,
  Search,
  StopWordsTokenizer,
} from 'js-search'
import queryString from 'query-string'
import { useDebounce } from 'use-debounce'
import Layout from 'design/components/layout'
import usePosts from 'design/hooks/use-posts'
import { size } from 'design/components/layout/themed/theme'
import { Heading2 } from 'design/components/common/headings'
import Wrap from 'design/components/common/responsive/wrap'
import Preview from 'design/components/preview'
import Paragraph from 'design/components/common/paragraph'
import Fit from 'design/components/common/responsive/fit'
import SearchInput from 'design/components/search-input'
import SEO from 'design/components/seo'

const createSearch = (posts) => {
  const engine = new Search(`path`)
  engine.tokenizer = new StopWordsTokenizer(engine.tokenizer)
  engine.indexStrategy = new AllSubstringsIndexStrategy()

  engine.addIndex(`title`)
  engine.addIndex(`tags`)
  engine.addIndex(`body`)

  engine.addDocuments(posts)

  return engine.search.bind(engine)
}

const Posts = ({ location }) => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title='Posts' path='/posts' />
      <Fit direction='column' textAlign='center' gap={size(6)}>
        <Heading2>Posts</Heading2>
        {posts.length > 0 ? (
          <SearchClient location={location} posts={posts} />
        ) : (
          <Paragraph>No posts yet. Come back soon!</Paragraph>
        )}
      </Fit>
    </Layout>
  )
}

const SearchClient = ({ location, posts }) => {
  const [query, setQuery] = useState(
    () => queryString.parse(location.search ?? ``)?.query ?? ``
  )
  const [debouncedQuery] = useDebounce(query, 100)

  const [searcher, setSearcher] = useState(() =>
    query.trim().length > 0 ? { search: createSearch(posts) } : {}
  )

  useEffect(() => {
    if (searcher.search == null) {
      setSearcher({ search: createSearch(posts) })
    }
  }, [searcher, posts])

  const filteredPosts =
    searcher.search != null && debouncedQuery.trim().length > 0
      ? searcher.search(debouncedQuery)
      : posts

  return (
    <>
      <SearchInput
        defaultValue={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Wrap
        direction='row'
        justify='center'
        itemBasis='27ch'
        gap={size(7)}
        hideOverflow
      >
        {filteredPosts.map((post) => (
          <Preview key={post.path} post={post} />
        ))}
      </Wrap>
    </>
  )
}

export default Posts
