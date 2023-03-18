import { PostModel } from './../domains/models/PostModel';
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
    @Get('/find/:id')
    @OnUndefined(404)
    public async find(@Params() id: number) {
        const postEntity: PostEntity = await this.postRepository.find(id);
        return PostModel.create(postEntity).responseBody();
    }
  
    /**
     * タスクの全件検索
     * @returns 
     */
    @Get('/findAll')
    @OnUndefined(404)
    public async findAll() {
        const postEntityList: Array<PostEntity> = await this.postRepository.findAll();
        const postDtoList: Array<PostDto> = new Array<PostDto>;
        postEntityList.forEach((postEntity) => {
            postDtoList.push(PostModel.create(postEntity).responseBody());
        });
        return postDtoList;
    }

    /**
     * タスクの追加
     * @param body 
     */
    @Post('/insert')
    public async insert(@Body() body: PostDto) {
        const postEntity = PostEntity.create(0, {
            title: body.title,
            startDate: Time.create({ value: body.startDate }),
            endDate: Time.create({ value: body.endDate }),
            isSuccess: body.isSuccess,
            createdAt: Time.create({value: '' }),
            updatedAt: Time.create({value: '' })
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
            startDate: Time.create({ value: body.startDate }),
            endDate: Time.create({ value: body.endDate }),
            isSuccess: body.isSuccess,
            createdAt: Time.create({value: '' }),
            updatedAt: Time.create({value: '' })
        })
        this.postRepository.update(postEntity);
    }
  
    /**
     * タスクの削除
     * @param id 
     */
    @Delete('/remove/:id')
    public async remove(@Param('id') id: number) {
        this.postRepository.remove(id);
    }
}