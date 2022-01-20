
import {ApolloServer} from 'apollo-server';
import {Query} from './resolvers/Query';
import {typeDefs} from './schema';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient<
  Prisma.PrismaClientOptions,
  never,
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
>;
}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    },
    context: {
      prisma
    }
  });

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});

