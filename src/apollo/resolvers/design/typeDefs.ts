import { gql } from 'apollo-server-express';    

export const designTypeDefs = gql`

type Designer {
    _id: ID!
    fullName: String!
    email: String!
    avatar: String!
    username: String!
}

type Design {
    _id: ID!
    designer: ID!
    preview: String!
    views: Int!
    saves: Int!
    description: String!
    designSubscription: String!
    designFile: String!
    designFileRef: String!
    designImages: [String]
    createdAt: String!
    tags: [String!]!
    category: String!
    title: String!
    previewImageRef: String!
    designImagesRef: [String]
}


type AllDesigns {
    _id: ID!
    designer: User!
    preview: String!
    views: Int!
    saves: Int!
    description: String!
    designSubscription: String!
    designFile: String!
    designFileRef: String!
    designImages: [String]
    createdAt: String!
    tags: [String!]!
    category: String!
    title: String!
    previewImageRef: String!
    designImagesRef: [String]
}

type Comment {
    _id: ID!
    comment: String!
    commentedBy: ID!
    commentedAt: String!
    designId: String!
}

type UserComment {
    _id: ID!
    comment: String!
    commentedBy: Designer!
    commentedAt: String!
    designId: String!
}

type Like {
    _id: ID!
    designId: ID!
    likedBy: ID!
    likedAt: String!
}

type UserLike {
    _id: ID!
    designId: ID!
    likedBy: Designer!
    likedAt: String!
}

type NumberOfLikes {
    data: [UserLike!]!
    numberOfLikes: Int!
}

type SavedDesign {
    _id: ID!
    design: ID!
    savedBy: ID!
    savedAt: String!
    designer: ID!
}

type SavedDesigns {
    _id: ID!
    design: Design!
    savedBy: ID!
    savedAt: String!
    designer: Designer!
}

input CreateDesignInput {
    preview: String!
    description: String!
    designSubscription: String!
    designFile: String!
    designFileRef: String!
    designImages: [String]
    tags: [String!]!
    category: String!
    title: String!
    designImagesRef: [String]
    previewImageRef: String!
}

input UpdateDesignInput {
    designId: ID!
    preview: String!
    description: String!
    designFile: String!
    designFileRef: String!
    tags: [String]
    category: String
    designSubscription: String
}

type Query {
    getAllDesigns: [AllDesigns!]!
    getUserDesigns(userId: String!): [AllDesigns!]!
    getSavedDesigns: [SavedDesigns!]!
    getDesignLikes(designId: String!): NumberOfLikes!
    searchDesigns(searchTerm: String!): [AllDesigns!]!
    getDesignById(designId: String!): AllDesigns!
}

type Mutation {
    createDesign(createDesignInput: CreateDesignInput): Design!
    createComment(designId: String!, comment: String!): Comment!
    likeDesign(designId: String!): Like!
    saveDesign(designId: String!, designer: String): SavedDesign!
    unlikeDesign(designId: String!): String!
    becomeDesigner: User!
    deleteDesign(designId: String!): String!
    unsaveDesign(designId: String!): String!
    updateDesign(updateDesignInput: UpdateDesignInput): Design!
}

type Subscription {
    newComment(designId: ID!): UserComment!
    newLike(designId: ID!): UserLike!
}
`;
