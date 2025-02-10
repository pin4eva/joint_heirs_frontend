import { gql } from '@apollo/client';

export const REGISTER_APPLICANT = gql`
	mutation ($input: RegisterApplicantInput!) {
		registerApplicant(input: $input) {
			id
			name
		}
	}
`;

export const LOGIN = gql`
	mutation ($input: LoginInput!) {
		login(input: $input) {
			id
			token
			accountType
		}
	}
`;

export const GET_ME = gql`
	{
		me {
			id
			name
			firstName
			lastName
			middleName
			image
		}
	}
`;
