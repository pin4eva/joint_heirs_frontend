import { gql } from "@apollo/client";

const SERMON_FRAGMENT = gql`
	fragment SermonFragment on Sermon {
		id
		title
		youtubeLink
		author
		thumbnail
	}
`;

export const GET_SERMONS = gql`
	query {
		getSermons {
			...SermonFragment
		}
	}
	${SERMON_FRAGMENT}
`;

export const GET_SERMON = gql`
	query ($id: String!) {
		getSermon(id: $id) {
			...SermonFragment
			body
		}
	}
	${SERMON_FRAGMENT}
`;

export const GET_SERMON_BY_SLUG = gql`
	query ($slug: String!) {
		getSermonBySlug(slug: $slug) {
			...SermonFragment
			body
		}
	}
	${SERMON_FRAGMENT}
`;
