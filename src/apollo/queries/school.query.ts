import { gql } from '@apollo/client';

export const GET_FACULTIES = gql`
	{
		getFaculties {
			id
			name
		}
	}
`;

export const GET_DEPARTMENTS = gql`
	{
		getDepartments {
			id
			name
		}
	}
`;

export const GET_COURSES = gql`
	{
		getCourses {
			id
			name
		}
	}
`;
