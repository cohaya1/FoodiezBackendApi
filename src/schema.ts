import {gql} from 'apollo-server';

export const typeDefs = gql` 
    type Query { 
        hello: String
    }
    type Mutation { 
        CreateRestaurant(restaurantname: String, restaurantlocation: String,restaurantrating: Float,restaurantimage: String,RestaurantTypeInfo: [RestaurantTypeInfo]): RestaurantInfoPayload!
    }
    type RestaurantInfo {
id: ID!
restaurantname: String!
restaurantlocation: String!
restaurantrating: Float!
restaurantimage: String!
createdAt : String!
RestaurantTypeInfo: [RestaurantTypeInfo]
}
type RestaurantTypeInfo {
  typeid: ID!
  restauranttype: String!
  restaurantcategory: RestaurantInfo[]// info for multiple restaurants of same type
}
type RestaurantInfoErrors{
  message : String
}
type RestaurantInfoPayload {
  restaurantinfoerrors : [RestaurantInfoErrors!]!
  restaurantinfo : RestaurantInfo
}
`;