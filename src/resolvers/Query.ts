import { Context } from "..";

export const Query = {
    restaurants:  (_: any, __: any, {prisma}: Context ) => {
     return  prisma.restaurantInfo.findMany()  
    },
};
