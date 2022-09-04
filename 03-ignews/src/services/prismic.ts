import * as Prismic from '@prismicio/client'
import fetch from 'node-fetch'

export function getPrismicClient() {
  const endpoint = Prismic.getRepositoryEndpoint('ignews-renato-takao')
  const prismic = Prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    routes: [{ type: 'post', path: '/posts/:uid' }],
    fetch
  })
  return prismic
}