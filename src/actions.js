import { HttpError } from 'wasp/server'

export const createSearch = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  return context.entities.Search.create({
    data: {
      location: args.location,
      userId: context.user.id
    }
  });
}

export const generateRecommendation = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  // Implementation logic to generate a new Recommendation based on user's search history.

  return context.entities.Recommendation.create({
    data: {
      foodItem: 'Recommended Food Item',
      user: { connect: { id: context.user.id } }
    }
  });
}