import { gql } from "@apollo/client";

export const GET_TOKEN = gql`
  mutation IsUser($username: String!, $password: String!, $isAdmin: Boolean) {
    isUser(useInfo:{username: $username, password: $password, isAdmin: $isAdmin})
  }
`;
export const CREATE_JOURNAL_TYPE = gql`
  mutation CreateJournalType(
	$coverId: Int
	$name: String!
	$keywords: String
	$resourceType: Int
	$language: String
	) {
	createJournalType(
		input: {
		coverId: $coverId
		name: $name
		keywords: $keywords
		resourceType: $resourceType
		language: $language
		}
	){
		id
		cover{
			filename
			mimetype
		}
		name
		keywords
		resourceType
		language
	}
	}

`;
export const CREATE_JOURNAL = gql`
	mutation CreateJournals(
		$name: String!
		$language: String
		$year: Int!
		$serialNumber: Int!
		$fileId:Int
		$coverId:Int
		$keywords:String
		$resourceType:Int
		$date:String
  
		) {
		createJournal(
			input: {
			name: $name
			language: $language
			year: $year
			serialNumber: $serialNumber
			fileId:$fileId
			coverId:$coverId
			keywords:$keywords
			resourceType:$resourceType
			date:$date
        
			}
		)
	}
`;


export const CREATE_SCIENCE_BOOK = gql`
	mutation CreateScienceBook(
		$fileId: Int
		$degree: Int
		$author: String
		$coverId: Int
		$name: String!
		$language:String
		$keywords:String
		$description:String
		$resourceType:Int
		$date:String

	) {
		createScience(
			input: {
			fileId: $fileId
			coverId:$coverId
			name: $name
			author: $author
			degree: $degree
			language:$language
			keywords:$keywords
			description: $description
			resourceType:$resourceType
			date:$date
			
			}
		)
	}
`;

export const CREATE_FORIEGN_BOOK = gql`
	mutation CreateForiegnBook(
		$fileId: Int
		$coverId:Int
		$name:String!
		$author: String
		$keywords: String
		$description: String
		$resourceType:Int
		$language:String
		$resourseHolder:String
		$date:String
		) {
		createForiegnBook(
			input: {
			fileId: $fileId
			coverId: $coverId
			name: $name
			author: $author
			keywords: $keywords
			description: $description
			resourceType: $resourceType
			language:$language
			resourseHolder:$resourseHolder
			date:$date
			}
		)
		}
 
`;
