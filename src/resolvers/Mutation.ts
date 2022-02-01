import { Context } from "../index"

interface CreateRestaurantArgs{
    restaurantname: string
    restaurantlocation: string
    restaurantrating: number
    restaurantimage: string
    restauranttype: string

}
export const Mutation = {
    createRestaurant: (__: any, {restaurantname,restaurantimage,restauranttype,restaurantrating,restaurantlocation}: any, {prisma}: any) =>{
        prisma.RestaurantInfo.create({
            data: {
                restaurantname,
                restaurantlocation,
                restaurantrating,
                restaurantimage,
                RestaurantTypeInfo: {
                    create: {
                        restauranttype
                            }
                
                            
                    },

    },
})
}
}
    