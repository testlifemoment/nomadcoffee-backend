import { gql } from "apollo-server";

const typeDefs = gql`
	type Coffee {
		id: Int!
		title: String
		year: Int
	}
	type Query {
		movies: [Coffee]
		movie(id: Int!): Coffee
	}
	type Mutation {
		createCoffee(title: String!, year: Int!): Coffee
		deleteCoffee(id: Int!): Coffee
	}
`;

export default typeDefs;
