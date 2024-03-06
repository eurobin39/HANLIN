

const Query = {
  seeProfile: async (_, { userName }) => {
    const user = await getUserByUsername(userName);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  },
};

export { Query };
