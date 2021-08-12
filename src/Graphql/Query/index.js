import {  gql  } from "@apollo/client";

export const USER = gql`
    query($userId: Int) {
        users(userId: $userId)
    }
`
export const SCIENCE_BOOKS = gql`
    query {
        scienceBooks {
            bookId
            cover {
            coverId
            filename
            mimetype
            }
            file {
            filename
            fileId
            mimetype
            }
            name
            author
            keywords
            description
            resourceType
            degree
            language
            data
        }
    }

`
export const FORIEGN_BOOKS = gql`
    query {
        foriegnBooks {
            bookId
            file {
            fileId
            filename
            mimetype
            size
            }
            cover {
            coverId
            filename
            mimetype
            size
            }
            name
            author
            keywords
            description
            resourceType
            language
            data
            resourseHolder
        }
        }

`