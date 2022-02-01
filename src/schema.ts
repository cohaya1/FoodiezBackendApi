import {gql} from 'apollo-server';

export const typeDefs = gql` 
    type Query { 
        restaurants: [RestaurantInfo!]!
    }
    type Mutation { 
        CreateRestaurant(restaurantname: String, restaurantlocation: String,restaurantrating: Float,restaurantimage: String,RestaurantTypeInfo: RestaurantTypeInfo)
    }
type RestaurantTypeInfo {
  typeid: ID!
  restauranttype: String!
  restaurantcategory: RestaurantInfo[]
}
type RestaurantInfo {
id: ID!
restaurantname: String!
restaurantlocation: String!
restaurantrating: Float!
restaurantimage: String!
createdAt: String!
RestaurantTypeInfo: RestaurantTypeInfo
}

type RestaurantInfoErrors{
  message: String!
}
# type RestaurantInfoPayload {
    
# restaurantinfoerrors : [RestaurantInfoErrors!]!
  
#   restaurantinfo : RestaurantInfo
# }
`;