import { PostDto } from './dto/PostDto';
import { Body, Delete, Get, JsonController, OnUndefined, Params, Post, Put } from "routing-controllers";
import { PostEntity } from "../domains/entities/PostEntity";
import IPostRepository from "../domains/repositories/PostRepository";
import { Time } from "../domains/valueobjects/Time";
import PostSQLite from "../infrastructures/sqlite/PostSQLite";

@JsonController()
export class PostController {
    private postRepository: IPostRepository = PostSQLite.create();

    /**
     * タスクの検索
     * @param id 
     * @returns 
     */
    @Get('/post/:id')
    @OnUndefined(404)
    public async find(@Params() id: number) {
        return this.postRepository.find(id);
    }
  
    /**
     * タスクの全件検索
     * @returns 
     */
    @Get('/posts')
    @OnUndefined(404)
    public async findAll() {
        return this.postRepository.findAll();
    }

    /**
     * タスクの追加
     * @param body 
     */
    @Post('/post')
    public async create(@Body() body: PostDto) {
        const postEntity = PostEntity.create(0, {
            title: body.title,
            detail: body.detail,
            startDate: Time.create({ date: body.startDate }),
            endDate: Time.create({ date: body.endDate }),
            isSuccess: body.isSuccess,
        })
        this.postRepository.insert(postEntity);
    }
  
    /**
     * タスクの更新
     * @param body 
     */
    @Put('/post/update')
    public async update(@Body() body: PostDto) {
        const postEntity = PostEntity.create(0, {
            title: body.title,
            detail: body.detail,
            startDate: Time.create({ date: body.startDate }),
            endDate: Time.create({ date: body.endDate }),
            isSuccess: body.isSuccess,
        })
        this.postRepository.update(postEntity);
    }
  
    /**
     * タスクの削除
     * @param id 
     */
    @Delete('/post/:id')
    public async delete(@Params() id: number) {
        this.postRepository.remove(id);
    }
}