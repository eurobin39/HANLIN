import bcrypt from 'bcryptjs';
import client from '../client.js';

const Mutation = {
  createAccount: async (_, { firstName, lastName, userName, email, password }) => {
    // 비밀번호 해시 처리
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const existingUser = await client.user.findFirst({
        where:{
            OR: [
                {
                userName,
                },
                {
                email,
                },
            ],
        },
    });
    
    if (existingUser) {
        throw new Error("This username/email is already taken.");
      }
      
    
    

    return client.user.create({
        data: {
          userName,
          email,
          firstName,
          lastName,
          password: hashedPassword,
        },
      });
      
  },
};


export { Mutation };
