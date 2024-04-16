import { HttpError } from 'wasp/server'

export const getSearches = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Search.findMany({
    where: { userId: context.user.id }
  });
}

export const getRecommendations = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Recommendation.findMany({ where: { userId: context.user.id } });
}