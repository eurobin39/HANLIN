import bcrypt from 'bcryptjs';
import client from '../client.js';

const Mutation = {
  createAccount: async (_, { firstName, lastName, userName, email, password }) => {
    // 비밀번호 해시 처리
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const existingUser = client.user.findFirst({
        where:{
            or: [
                {
                userName,
                },
                {
                email,
                },
            ],
        },
    });
    console.log(existingUser);
    

    

    return client.user.create(
        {
            userName,
            email,
            firstName,
            lastName,
            password : hashedPassword,  
        },
    );
  },
};


export { Mutation };
