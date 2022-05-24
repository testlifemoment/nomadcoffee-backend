import client from "../client";

export default {
	Query: {
		movies: () => client.Coffee.findMany(),
		movie: () => ({ title: "Hello" }),
	},
};
