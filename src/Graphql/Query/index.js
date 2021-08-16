import {  gql  } from "@apollo/client";

export const USER = gql`
    query($userId: Int) {
        users(userId: $userId)
    }
`
export const EXACT_JOURNAL = gql`
    query ExactJournal($id:Int){
        exactJournals(id: $id) {
            id
            file {
            filename
            }
            serialNumber
            year    
            date
        }
    }

`
export const JOURNAL_NAME = gql`
    {
        journals{
            id
            name
            cover{
                coverId
                filename
                mimetype
            }
            resourceType
        }
    }
`

export const JOURNALS = gql`
   query{
    journals{
        id
        cover{
            coverId
            filename
        }
        name
        resourceType
        language  
    }
    }

`
export const SCIENCE_BOOKS = gql`
    query {
        sciences {
            id
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
            date
        }
    }

`
export const FORIEGN_BOOKS = gql`
    query {
        foriegnBooks {
            id
            name
            author
            keywords
            description
            resourceType
            language
            date
            resourseHolder
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
        }
    }

`