import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ra25sk0qg801yxhnza37uy/master',
  cache: new InMemoryCache()
})