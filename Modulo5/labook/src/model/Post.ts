enum POST_TYPE  {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}

export type LabookPost= {
    id:string, 
    creatorId:string,
    picture:string, 
    description:string,
    createdAt: Date, 
    postType:POST_TYPE

}

export interface LabookPostCreationDTO {
    authorization:string,
    picture:string,
    description:string, 
    postType: POST_TYPE
}

export interface LabookPostByIdDTO {
    authorization:string, 
    id:string
}