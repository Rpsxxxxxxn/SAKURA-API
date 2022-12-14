import { PostDto } from './dto/PostDto';
import { Body, Delete, Get, JsonController, OnUndefined, Param, Params, Post, Put } from "routing-controllers";
import { PostEntity } from "../domains/entities/PostEntity";
import IPostRepository from "../domains/repositories/PostRepository";
import { Time } from "../domains/valueobjects/Time";
import PostSQLite from "../infrastructures/sqlite/PostSQLite";

@JsonController('/post')
export class PostController {
    private postRepository: IPostRepository = PostSQLite.create();

    /**
     * タスクの検索
     * @param id 
     * @returns 
     */
    @Get('/get/:id')
    @OnUndefined(404)
    public async find(@Params() id: number) {
        return this.postRepository.find(id);
    }
  
    /**
     * タスクの全件検索
     * @returns 
     */
    @Get('/all')
    @OnUndefined(404)
    public async findAll() {
        return this.postRepository.findAll();
    }

    /**
     * タスクの追加
     * @param body 
     */
    @Post('/add')
    public async create(@Body() body: PostDto) {
        const postEntity = PostEntity.create(0, {
            title: body.title,
            detail: body.detail,
            startDate: Time.create({ value: body.startDate }),
            endDate: Time.create({ value: body.endDate }),
            isSuccess: body.isSuccess,
        })
        this.postRepository.insert(postEntity);
    }
  
    /**
     * タスクの更新
     * @param body 
     */
    @Put('/update/:id')
    public async update(@Param('id') id: number, @Body() body: PostDto) {
        const postEntity = PostEntity.create(id, {
            title: body.title,
            detail: body.detail,
            startDate: Time.create({ value: body.startDate }),
            endDate: Time.create({ value: body.endDate }),
            isSuccess: body.isSuccess,
        })
        this.postRepository.update(postEntity);
    }
  
    /**
     * タスクの削除
     * @param id 
     */
    @Delete('/delete/:id')
    public async delete(@Param('id') id: number) {
        this.postRepository.remove(id);
    }
}