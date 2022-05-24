import client from "../client";

export default {
	Mutation: {
		createCoffee: (_, { title, year, genre }) =>
			client.movie.create({ data: { title, year } }),
		deleteCoffee: (_, { id }) => client.movie.delete({ where: { id } }),
	},
};
