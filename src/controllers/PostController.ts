import { Body, Delete, Get, JsonController, OnUndefined, Params, Post, Put } from "routing-controllers";
import { PostEntity } from "../domains/entities/PostEntity";
import IPostRepository from "../domains/repositories/PostRepository";
import { Time } from "../domains/valueobjects/Time";
import PostSQLite from "../infrastructures/sqlite/PostSQLite";
import { PostDto } from "./dto/PostDto";

@JsonController()
export class PostController {
    private postRepository: IPostRepository = PostSQLite.create();

    /**
     * タスクの追加
     * @param dto 
     */
    @Post('/post')
    public async create(@Body() dto: PostDto) {
        const postEntity = PostEntity.create(0, {
            title: dto.title,
            detail: dto.detail,
            startDate: Time.create({ date: dto.startDate }),
            endDate: Time.create({ date: dto.endDate }),
            isSuccess: false,
        })
        this.postRepository.insert(postEntity);
    }
  
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
     * タスクの更新
     * @param dto 
     */
    @Put('/post/update')
    public async update(@Body() dto: PostDto) {
        const postEntity = PostEntity.create(0, {
            title: dto.title,
            detail: dto.detail,
            startDate: Time.create({ date: dto.startDate }),
            endDate: Time.create({ date: dto.endDate }),
            isSuccess: false,
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