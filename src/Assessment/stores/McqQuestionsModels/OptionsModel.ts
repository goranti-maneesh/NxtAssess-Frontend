import {FetchOptionsTypes} from '../types'

export class OptionsModel {
    id: string
    text: string
    isCorrect: string
    imageUrl: string

    constructor(options: FetchOptionsTypes){
        this.id = options.id
        this.text = options.text
        this. isCorrect = options.is_correct
        this.imageUrl = options.image_url
    }
}