import { Body, Delete, Get, JsonController, Params, Post, Put } from "routing-controllers";
import { PostEntity } from "../domains/entities/PostEntity";
import IPostRepository from "../domains/repositories/PostRepository";
import { Time } from "../domains/valueobjects/Time";
import PostSQLite from "../infrastructures/sqlite/PostSQLite";
import { PostDto } from "./dto/PostDto";

@JsonController()
export class PostController {
    private postRepository: IPostRepository = PostSQLite.create();

    @Post('/post')
    public create(@Body() dto: PostDto) {
        const postEntity = PostEntity.create(0, {
            title: dto.title,
            detail: dto.detail,
            startDate: Time.create({ date: dto.startDate }),
            endDate: Time.create({ date: dto.endDate }),
            isSuccess: false,
        })
        this.postRepository.insert(postEntity);
    }
  
    @Get('/post/:id')
    public read(@Params() id: number) {
        return this.postRepository.findAll();
    }
  
    @Put('/post/update')
    public update(@Body() dto: PostDto) {
        const postEntity = PostEntity.create(0, {
            title: dto.title,
            detail: dto.detail,
            startDate: Time.create({ date: dto.startDate }),
            endDate: Time.create({ date: dto.endDate }),
            isSuccess: false,
        })
        this.postRepository.update(postEntity);
    }
  
    @Delete('/post/:id')
    public delete(@Params() id: number) {
        this.postRepository.remove(id);
    }
}