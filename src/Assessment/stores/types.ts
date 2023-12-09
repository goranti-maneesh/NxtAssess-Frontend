export interface FetchOptionsTypes{
    id: string,
    text: string,
    is_correct: string
}

export interface FetchResDataTypes{
    total: number,
    questions: {
        id: string,
        options_type: string,
        question_text: string,
        options: Array<FetchOptionsTypes>
    }[],
    responseStatus: boolean
}