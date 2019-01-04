import { Category } from "./category";
import { Comment } from "./comment";

//Movie class
export class Films {
	public id: number;
	public title: string;
    public content: string;
    public image: string;
    public createAt: Date;
    public category: Category;
    public comment: Comment;

    /**
    * Create a movie
    */
    constructor() {
        this.category = new Category();
        this.comment = new Comment();
    }
}
