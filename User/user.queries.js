import client from "../client.js";


const Query = {
  seeProfile: async (_, { userName }) => {
    try {
      const user = await client.user.findUnique({ where: { userName } });
      return user;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw new Error("Failed to fetch profile");
    }
    
  },
};

export { Query };
